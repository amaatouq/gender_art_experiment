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

  handleChangeSliderIndex(index) {
    const { player, stage, readonly } = this.props;
    return function(num) {
      if (!readonly) {
        const value = Math.round(num * 100) / 100;
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

  createSlider(quality, index) {
    const { player, stage, readonly } = this.props;
    const name = stage.name + "-" + index.toString();
    var value = player.round.get(name);

    if (this.state.prepopulate && stage.get("type") === "social") {
      value = this.getPreviousStageResponse(index);
      player.round.set(name, value);
    }

    return (
      <div className="quality-scale">
        <p>{quality}</p>
        <Slider
          min={0}
          max={100}
          stepSize={0.01}
          labelStepSize={25}
          labelPrecision={0}
          onChange={this.handleChangeSliderIndex(index)}
          value={value}
          disabled={readonly}
          hideHandleOnEmpty
        />
      </div>
    );
  }

  render() {
    const { player, stage, round, readonly } = this.props;

    const qualities = round.get("relevantQualities");
    var scales = [];
    for (var i = 0; i < qualities.length; i++) {
      scales.push(
        this.createSlider(qualities[i], i)
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
