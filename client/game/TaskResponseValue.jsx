import React from "react";
import { Toaster, Position, RadioGroup, Radio } from "@blueprintjs/core";

const WarningToaster = Toaster.create({
  className: "warning-toaster",
  position: Position.TOP
});

export default class TaskResponseValue extends React.Component {
  state = { prepopulate: true };

  handleSubmit = event => {
    event.preventDefault();
    const { player, stage } = this.props;
    const value = player.round.get(stage.name);
    player.round.set(stage.name, value);

    if (!value) {
      WarningToaster.show({
        message: "Please select a value."
      });
    } else {
      this.props.player.stage.submit();
    }
  };

  handleChange = event => {
    const { player, stage } = this.props;
    const el = event.currentTarget;
    player.round.set(stage.name, el.value);
  };

  getPreviousStageResponse(player) {
    const { round, stage } = this.props;
    const stagesPerRound = round.stages.length;
    const prevIndex = (stage.index - 1)%stagesPerRound;
    const prevStage = round.stages[prevIndex].name;
    return player.round.get(prevStage);
  }

  render() {
    const { player, round, stage, readonly } = this.props;

    var value = player.round.get(stage.name);

    if (this.state.prepopulate && stage.get("type") === "social") {
      value = this.getPreviousStageResponse(player);
      player.round.set(stage.name, value);
      this.state.prepopulate = false;
    }

    var options = [];
    _.each(round.get("valueOptions"), option => {
      options.push(
        <Radio
          name="checkedOption"
          value={option.id}
          label={option.name}
          onChange={this.handleChange}
        />
      );
    });

    return (
      <div className="task-response">
        <form onSubmit={this.handleSubmit}>
          <RadioGroup
            inline={false}
            name="checkedOption"
            onChange={this.handleChange}
            selectedValue={player.round.get(stage.name)}
            disabled={readonly}
          >
            {options}
          </RadioGroup>

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
