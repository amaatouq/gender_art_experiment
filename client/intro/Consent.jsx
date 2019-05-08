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
            The purpose of this survey is to describe visual artworks for those
            who cannot see them. These are artworks are by living artists,
            though you are not expected to be familiar with the artists or their work.
          </p>

          <p className="bp3-ui-text">
            You can change your mind at any time and stop completing the survey without
            consequences. My name is Taylor Brown and I am a researcher at Duke University.
            If you have concerns about the research that you think I can help you with,
            please feel free to contact me on [phone number] or at [email address].
            If you would like to talk to someone who is not connected with the research,
            you may contact the Duke University Research Ethics Officer at [phone number]
            or at [email address].
          </p>

          <p className="bp3-ui-text">
            If you agree to be part of the research and to research data
            gathered from this survey being used in academic publication in a form
            that does not identify you, please continue with answering the survey
            questions.
          </p>
          <br />
          <ConsentButton color="OEDA83" text="I AGREE"/ >
        </div>
      </Centered>
    );
  }
}
