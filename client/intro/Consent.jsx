import React from "react";

import { Centered, ConsentButton } from "meteor/empirica:core";
import { H1, Classes } from "@blueprintjs/core";

export default class Consent extends React.Component {
  render() {
    return (
      <Centered>
        <div className="consent">
          <H1> Consent Form </H1>
          <p className="bp3-ui-text">
            My name is Taylor Brown and I am an academic at Duke University. The purpose of this survey is to describe artworks for those who cannot see them.
          </p>

          <p className="bp3-ui-text">
            You will be shown a series of 10 artworks. For each, you will be asked to (1) describe the work, (2) estimate its value, and (3) indicate your personal preference for it.
          </p>

          <p className="bp3-ui-text">
            These are not famous artworks, so you will probably be seeing them for the first time. You may, however, recognize artist names. Answer the questions purely based on your first impression.
          </p>

          <p className="bp3-ui-text purple" style={{ color: 'purple' }}>
            You will be given 5 minutes to complete each task.
          </p>

          <p className="bp3-ui-text">
            You will be given 5 minutes to complete each task. You can change
            your mind at any time and stop completing the survey without
            consequences. If you agree to be part of the research and to
            research data gathered from this survey being used in academic
            publication in a form that does not identify you, please continue
            with answering the survey questions. If you have concerns about the
            research that you think I can help you with, please feel free to
            contact me on [phone number] or at [email address]. If you would
            like to talk to someone who is not connected with the research, you
             may contact the Duke University Research Ethics Officer at
             [phone number] or at [email address].
          </p>
          <br />
          <ConsentButton text="I AGREE" />
        </div>
      </Centered>
    );
  }
}
