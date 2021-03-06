import React from "react";

import { Centered } from "meteor/empirica:core";

export default class InstructionStepOne extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, game } = this.props;

    return (
      <Centered>
        <div className="instructions">
          <h1>Instructions </h1>
          <p className="bp3-ui-text">
            You will now be asked to describe, value, and state your preference for 5 artworks by living artists.
          </p>
          <p className="bp3-ui-text">
            Before you answer, please{" "}
            <u>look at each artwork in detail,</u>{" "}
            and{" "}<u>consider the
              accompanying information
            </u>{" "}
            (e.g. size, medium, etc).{" "}Please rely solely on your personal impressions.
          </p>

          <button
            type="button"
            className="bp3-button bp3-intent-nope"
            onClick={onPrev}
            disabled={!hasPrev}
          >
            Previous
          </button>
          <button
            type="button"
            className="bp3-button"
            onClick={onNext}
            disabled={!hasNext}
            style={{backgroundColor: "#F7625A"}}
          >
            Next
            <span className="bp3-icon-standard bp3-align-right" />
          </button>
        </div>
      </Centered>
    );
  }
}
