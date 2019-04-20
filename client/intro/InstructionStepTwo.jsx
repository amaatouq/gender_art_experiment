import React from "react";

import { Centered } from "meteor/empirica:core";

export default class InstructionStepTwo extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev } = this.props;
    return (
      <Centered>
        <div className="instructions">
          <h1> Team Instructions </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio,
            animi? Quae autem asperiores officiis voluptatum fuga recusandae
            minima! Animi pariatur ex sapiente laborum. Ipsa quo quia ab,
            veritatis et labore.
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
          >
            Next
            <span className="bp3-icon-standard bp3-align-right" />
          </button>
        </div>
      </Centered>
    );
  }
}
