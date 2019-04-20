import React from "react";
import { Checkbox, Toaster, Position } from "@blueprintjs/core";

const WarningToaster = Toaster.create({
  className: "warning-toaster",
  position: Position.TOP
});

export default class TaskResponseOptions extends React.Component {
  state = { checkedOptions: {}, prepopulate: true };

  handleSubmit = event => {
    event.preventDefault();
    const checkedOptions = this.state.checkedOptions;
    const value = Object.keys(checkedOptions).filter(function(key) {
      return checkedOptions[key] === true;
    });
    if (value.length !== 3) {
      WarningToaster.show({
        message: "Please select exactly three qualities."
      });
    } else {
      this.props.player.stage.submit();
    }
  };

  handleChangeCheckbox(quality, event) {
    const { player, stage, readonly } = this.props;
    if (!readonly) {
      var checkedOptions = this.state.checkedOptions;
      var value = Object.keys(checkedOptions).filter(function(key) {
        return checkedOptions[key] === true;
      });
      if (value.length === 3 && !this.state.checkedOptions[quality]) {
        WarningToaster.show({
          message: "Please select exactly three qualities."
        });
        return;
      }

      if (this.state.checkedOptions[quality]) {
        this.state.checkedOptions[quality] = false;
      } else {
        this.state.checkedOptions[quality] = true;
      }
      checkedOptions = this.state.checkedOptions;
      value = Object.keys(checkedOptions).filter(function(key) {
        return checkedOptions[key] === true;
      });
      player.round.set(stage.name, value.join(", "));
    }
  }

  getPreviousRoundResponse(player) {
    const { round, stage } = this.props;
    const prevIndex = stage.index - 1;
    const prevStage = round.stages[prevIndex].name;
    return player.round.get(prevStage);
  }

  render() {
    const { player, round, stage, readonly } = this.props;

    const value = player.round.get(stage.name);
    const checkedQualities = value ? value.split(", ") : [];

    if (this.state.prepopulate && stage.get("type") === "social") {
      const prevResponse = this.getPreviousRoundResponse(player);
      const prevValues = prevResponse.split(", ");
      _.each(prevValues, quality => {
        this.state.checkedOptions[quality] = true;
        checkedQualities.push(quality);
      });
      player.round.set(stage.name, checkedQualities.join(", "));
      this.state.prepopulate = false;
    }

    var options = [];
    _.each(round.get("relevantQualities"), quality => {
      options.push(
        <div className="task-response-option">
          <Checkbox
            key={quality}
            checked={checkedQualities.includes(quality)}
            label={quality}
            disabled={readonly}
            onChange={event => this.handleChangeCheckbox(quality, event)}
          />
        </div>
      );
    });

    return (
      <div className="task-response">
        <form onSubmit={this.handleSubmit}>
          {options}

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
