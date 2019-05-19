import React from "react";
import { Toaster, Position, RadioGroup, Radio } from "@blueprintjs/core";

const WarningToaster = Toaster.create({
  className: "warning-toaster",
  position: Position.TOP
});

export default class TaskResponseQualities extends React.Component {
  state = { prepopulate: true };

  handleChangeIndex(index) {
    const { player, stage, readonly } = this.props;
    return function(event) {
      if (!readonly) {
        const value = event.currentTarget.value;
        const name = stage.name + "-" + index.toString();
        player.round.set(name, value);
      }
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    const { player, round, stage } = this.props;
    const qualities = round.get("relevantQualities");

    for (var i = 0; i < qualities.length; i++) {
      const name = stage.name + "-" + i.toString();
      const value = player.round.get(name);
      if (!value) {
        WarningToaster.show({
          message: "Please enter a response for all qualities."
        });
        return;
      }
    }

    this.props.player.stage.submit();
  };

  getPreviousStageResponse(index) {
    const { player, round, stage } = this.props;
    const stagesPerRound = round.stages.length;
    const prevStageIndex = (stage.index - 1)%stagesPerRound;
    const prevStage = round.stages[prevStageIndex].name;
    const name = prevStage + "-" + index.toString();
    return player.round.get(name);
  }

  createRadioButtons(quality, index) {
    const { player, round, stage, readonly } = this.props;
    const name = stage.name + "-" + index.toString();
    var value = player.round.get(name);

    if (this.state.prepopulate && stage.get("type") === "social") {
      value = this.getPreviousStageResponse(index);
      player.round.set(name, value);
    }

    var options = [];
    _.each(round.get("qualityOptions"), option => {
      options.push(
        <Radio
          name={name}
          value={option.id}
          label={option.name}
          onChange={this.handleChangeIndex(index)}
        />
      );
    });

    return (
      <div className="quality-radio">
        <p>{quality}</p>
        <RadioGroup
          inline={false}
          name={name}
          onChange={this.handleChangeIndex(index)}
          selectedValue={value}
          disabled={readonly}
        >
          {options}
        </RadioGroup>
      </div>
    );
  }

  render() {
    const { player, stage, round, readonly } = this.props;

    const qualities = round.get("relevantQualities");
    var scales = [];
    for (var i = 0; i < qualities.length; i++) {
      scales.push(
        this.createRadioButtons(qualities[i], i)
      );
    }

    if (this.state.prepopulate && stage.get("type") === "social") {
      this.state.prepopulate = false;
    }

    return (
      <div className="task-response">
        <form onSubmit={this.handleSubmit}>
          {scales}

          {readonly ? (
            ""
          ) : (
            <button className="bp3-button" type="submit">
              Next
            </button>
          )}
        </form>
      </div>
    );
  }
}
