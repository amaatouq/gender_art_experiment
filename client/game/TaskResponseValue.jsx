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

    const value = player.round.get(stage.name);

    if (this.state.prepopulate && stage.get("type") === "social") {
      value = this.getPreviousRoundResponse(player);
      player.round.set(stage.name, value);
      this.state.prepopulate = false;
    }

    return (
      <div className="task-response">
        <form onSubmit={this.handleSubmit}>
          <RadioGroup
            inline={false}
            label="On average, artwork created in the past five years has been priced at $. What price would you assign to this artwork, if it were being sold at a gallery in a major city?"
            name="checkedOption"
            onChange={this.handleChange}
            selectedValue={checkedOption}
          >
            <Radio
              selected={checkedOption}
              name="checkedOption"
              value="belowAverage"
              label="Below Average"
              onChange={this.handleChange}
            />
            <Radio
              selected={checkedOption}
              name="checkedOption"
              value="average"
              label="Average"
              onChange={this.handleChange}
            />
            <Radio
              selected={checkedOption}
              name="checkedOption"
              value="aboveAverage"
              label="Above Average"
              onChange={this.handleChange}
            />
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
