import React from "react";
import { Toaster, Position, RadioGroup, Radio } from "@blueprintjs/core";

const WarningToaster = Toaster.create({
  className: "warning-toaster",
  position: Position.TOP
});

export default class TaskResponseValue extends React.Component {
  state = { checkedOption: "", prepopulate: true };

  handleSubmit = event => {
    event.preventDefault();
    const value = this.state.checkedOption;
    const { player, stage } = this.props;
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
    const el = event.currentTarget;
    this.setState({ [el.name]: el.value });
  };

  getPreviousRoundResponse(player) {
    const { round, stage } = this.props;
    const prevIndex = stage.index - 1;
    const prevStage = round.stages[prevIndex].name;
    return player.round.get(prevStage);
  }

  render() {
    const { player, round, stage, readonly } = this.props;
    const { checkedOption } = this.state;
    console.log(checkedOption);
    console.log(this.state);

    var value = player.round.get(stage.name);

    if (this.state.prepopulate && stage.get("type") === "social") {
      value = this.getPreviousRoundResponse(player);
      player.round.set(stage.name, value);
      this.state.prepopulate = false;
    }

    var options = [];
    _.each(round.get("valueOptions"), option => {
      options.push(
        <Radio
          selected={checkedOption}
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
            selectedValue={checkedOption}
          >
            {options}
          </RadioGroup>

          {readonly ? (
            ""
          ) : (
            <button className="bp3-button bp3-intent-primary" type="submit">
              Next
            </button>
          )}
        </form>
      </div>
    );
  }
}
