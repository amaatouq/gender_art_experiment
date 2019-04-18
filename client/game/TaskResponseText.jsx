import React from "react";
import {
  TextArea,
  Intent,
  Checkbox,
  Toaster,
  Position
} from "@blueprintjs/core";

const WarningToaster = Toaster.create({
  className: "warning-toaster",
  position: Position.TOP
});

export default class TaskResponseText extends React.Component {
  state = { prepopulate: true };

  handleChangeText = event => {
    const { player, stage, readonly } = this.props;
    if (!readonly) {
      const value = event.currentTarget.value;
      player.round.set(stage.name, "*" + value + "*");
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    const { player, stage } = this.props;
    var value = player.round.get(stage.name);
    if (value) {
      value = value.slice(1, -1);
      player.round.set(stage.name, value);
    }
    if (!value || value.length === 0) {
      WarningToaster.show({
        message: "Please provide a description."
      });
    } else {
      this.props.player.stage.submit();
    }
  };

  getPreviousRoundResponse(player) {
    const { round, stage } = this.props;
    const prevIndex = stage.index - 1;
    const prevStage = round.stages[prevIndex].name;
    return player.round.get(prevStage);
  }

  render() {
    const { player, stage, readonly } = this.props;
    var value = player.round.get(stage.name);
    if (value) {
      value = value.slice(1, -1);
    }

    if (this.state.prepopulate && stage.get("type") === "social") {
      value = this.getPreviousRoundResponse(player);
      player.round.set(stage.name, "*" + value + "*");
      this.state.prepopulate = false;
    }
    return (
      <div className="task-response">
        <form onSubmit={this.handleSubmit}>
          <div className="text-input">
            <TextArea
              className={readonly ? "" : "readonly"}
              large={true}
              readOnly={readonly}
              intent={readonly ? "" : Intent.PRIMARY}
              onChange={this.handleChangeText}
              value={value}
            />
          </div>

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
