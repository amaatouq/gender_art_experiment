import React from "react";

import { Centered } from "meteor/empirica:core";

export default class Quiz extends React.Component {
  state = { living: "", artcount: "" };

  handleChange = event => {
    const el = event.currentTarget;
    this.setState({ [el.name]: el.value.trim().toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.living !== "yes" || this.state.artcount !== "5") {
      alert("Incorrect! Read the instructions, and please try again.");
    } else {
      this.props.onNext();
    }
  };

  render() {
    const { hasPrev, hasNext, onNext, onPrev } = this.props;
    const { living, artcount } = this.state;
    return (
      <Centered>
        <div className="quiz">
          <h1> Quiz </h1>
          <form onSubmit={this.handleSubmit}>
            <p>
              <label htmlFor="living">
                Are the artworks you will see by living artists?
              </label>
              <input
                type="text"
                dir="auto"
                id="living"
                name="living"
                placeholder="yes / no"
                value={living}
                onChange={this.handleChange}
                autoComplete="off"
                required
              />
            </p>
            <p>
              <label htmlFor="artcount">
                How many artworks will you be evaluating?
              </label>
              <input
                type="text"
                dir="auto"
                id="artcount"
                name="artcount"
                placeholder=""
                value={artcount}
                onChange={this.handleChange}
                autoComplete="off"
                required
              />
            </p>

            <p>
              <button type="button" onClick={onPrev} disabled={!hasPrev}>
                Back to instructions
              </button>
              <button type="submit">Next</button>
            </p>
          </form>
        </div>
      </Centered>
    );
  }
}
