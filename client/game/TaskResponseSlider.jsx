import React from "react";
import Slider from "meteor/empirica:slider";

import { Toaster, Position } from "@blueprintjs/core";

const WarningToaster = Toaster.create({
  className: "warning-toaster",
  position: Position.TOP
});

export default class TaskResponse extends React.Component {
  state = { prepopulate: true };

  handleChangeSlider = num => {
    const { player, stage, readonly } = this.props;
    if (!readonly) {
      const value = Math.round(num * 100) / 100;
      player.round.set(stage.name, value);
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    const { player, stage } = this.props;

    if (!player.round.get(stage.name)) {
      WarningToaster.show({
        message: "Please enter a response."
      });
    } else {
      this.props.player.stage.submit();
    }
  };

  getPreviousStageResponse(player) {
    const { round, stage } = this.props;
    const stagesPerRound = round.stages.length;
    const prevIndex = (stage.index - 1)%stagesPerRound;
    const prevStage = round.stages[prevIndex].name;
    return player.round.get(prevStage);
  }

  render() {
    const { player, stage, readonly } = this.props;
    var value = player.round.get(stage.name);

    if (this.state.prepopulate && stage.get("type") === "social") {
      value = this.getPreviousStageResponse(player);
      player.round.set(stage.name, value);
      this.state.prepopulate = false;
    }

    return (
      <div className="task-response">
        <form onSubmit={this.handleSubmit}>
          <Slider
            min={0}
            max={100}
            stepSize={0.01}
            labelStepSize={25}
            labelPrecision={0}
            onChange={this.handleChangeSlider}
            value={value}
            disabled={readonly}
            hideHandleOnEmpty
          />

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
