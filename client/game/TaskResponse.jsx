import React from "react";

import TaskResponseText from "./TaskResponseText";
import TaskResponsePreference from "./TaskResponsePreference";
import TaskResponseValue from "./TaskResponseValue";
import TaskResponseQualities from "./TaskResponseQualities";

export default class TaskResponse extends React.Component {
  renderSubmitted() {
    return (
      <div className="task-response">
        <div className="response-submitted">
          <h5 className="bp3-heading">Waiting on other players...</h5>
          Please wait until all players are ready
        </div>
      </div>
    );
  }

  render() {
    const { player, round, stage } = this.props;
    // If the player already submitted, don't show the slider or submit button
    if (player.stage.submitted) {
      return this.renderSubmitted();
    }

    if (stage.name === "description" || stage.name === "description-social") {
      return <TaskResponseText {...this.props} />;
    } else if (
      stage.name === "qualities" ||
      stage.name === "qualities-social"
    ) {
      // return <TaskResponseScales {...this.props} />;
      return <TaskResponseQualities {...this.props} />;
    } else if (stage.name === "value" || stage.name === "value-social") {
      return <TaskResponseValue {...this.props} />;
    } else if (
      stage.name === "preference" ||
      stage.name === "preference-social"
    ) {
      return <TaskResponsePreference {...this.props} />;
    }
  }
}
