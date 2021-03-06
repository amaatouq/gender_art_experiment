import React from "react";

import { Centered } from "meteor/empirica:core";
import {
  Button,
  Classes,
  FormGroup,
  RadioGroup,
  TextArea,
  Intent,
  Radio
} from "@blueprintjs/core";

// const Radio = ({ selected, name, value, label, onChange }) => (
//   <label>
//     <input
//       type="radio"
//       name={name}
//       value={value}
//       checked={selected === value}
//       onChange={onChange}
//     />
//     {label}
//   </label>
// );

export default class ExitSurvey extends React.Component {
  static stepName = "ExitSurvey";
  state = {
    age: "",
    gender: "",
    country: "",
    education: "",
    visits: "",
    fair: "",
    original: "",
    home: "",
    creative: "",
    jobTitle: ""
  };

  handleChange = event => {
    const el = event.currentTarget;
    this.setState({ [el.name]: el.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { player } = this.props;
    const { age, gender, country, education, visits, fair, original, home, creative, jobTitle } = this.state;

    return (
      <Centered>
        <div className="exit-survey">
          <h1 className="bp3-heading"> Exit Survey </h1>

          <p className="bp3-ui-text">
            Please answer the following general information questions about
            yourself:
          </p>
          <form onSubmit={this.handleSubmit}>
            <div className="form-line thirds">
              <div>
                <label className="bp3-label" htmlFor="age">Age</label>
                <div>
                  <input
                    id="age"
                    type="number"
                    min="0"
                    max="150"
                    step="1"
                    dir="auto"
                    name="age"
                    value={age}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div>
                <label className="bp3-label" htmlFor="gender">Gender</label>
                <div>
                  <input
                    id="gender"
                    type="text"
                    dir="auto"
                    name="gender"
                    value={gender}
                    onChange={this.handleChange}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div>
                <label className="bp3-label" htmlFor="country">Country</label>
                <div>
                  <input
                    id="country"
                    type="text"
                    dir="auto"
                    name="country"
                    value={country}
                    onChange={this.handleChange}
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>

            <div className="form-line">
              <div>
                <RadioGroup
                  inline={false}
                  label="Highest Education Qualification"
                  name="education"
                  onChange={this.handleChange}
                  selectedValue={education}
                >
                  <Radio
                    selected={education}
                    name="education"
                    value="high-school"
                    label="High School"
                    onChange={this.handleChange}
                  />
                  <Radio
                    selected={education}
                    name="education"
                    value="bachelor"
                    label="US Bachelor's Degree"
                    onChange={this.handleChange}
                  />
                  <Radio
                    selected={education}
                    name="education"
                    value="master"
                    label="Master's or higher"
                    onChange={this.handleChange}
                  />
                  <Radio
                    selected={education}
                    name="education"
                    value="other"
                    label="Other"
                    onChange={this.handleChange}
                  />
                </RadioGroup>
              </div>
            </div>

            <div className="form-line">
              <RadioGroup
                inline={false}
                label="How often do you visit an art gallery, museum, or exhibition?"
                name="visits"
                onChange={this.handleChange}
                selectedValue={visits}
              >
                <Radio
                  selected={visits}
                  name="visits"
                  value="never"
                  label="Never"
                  onChange={this.handleChange}
                />
                <Radio
                  selected={visits}
                  name="visits"
                  value="month"
                  label="At least once a month"
                  onChange={this.handleChange}
                />
                <Radio
                  selected={visits}
                  name="visits"
                  value="year"
                  label="A few times a year"
                  onChange={this.handleChange}
                />
              </RadioGroup>
            </div>

            <div className="form-line">
              <RadioGroup
                inline={false}
                label="Have you ever attended an art fair?"
                name="fair"
                onChange={this.handleChange}
                selectedValue={fair}
              >
                <Radio
                  selected={fair}
                  name="fair"
                  value="yes"
                  label="Yes"
                  onChange={this.handleChange}
                />
                <Radio
                  selected={fair}
                  name="fair"
                  value="no"
                  label="No"
                  onChange={this.handleChange}
                />
              </RadioGroup>
            </div>

            <div className="form-line">
              <RadioGroup
                inline={false}
                label="Have you ever purchased an original work of art (i.e. not a copy)?"
                name="original"
                onChange={this.handleChange}
                selectedValue={original}
              >
                <Radio
                  selected={original}
                  name="original"
                  value="yes"
                  label="Yes"
                  onChange={this.handleChange}
                />
                <Radio
                  selected={original}
                  name="original"
                  value="no"
                  label="No"
                  onChange={this.handleChange}
                />
              </RadioGroup>
            </div>

            <div className="form-line">
              <RadioGroup
                inline={false}
                label="Do you have artwork (original or copy) hanging in your home?"
                name="home"
                onChange={this.handleChange}
                selectedValue={home}
              >
                <Radio
                  selected={home}
                  name="home"
                  value="yes"
                  label="Yes"
                  onChange={this.handleChange}
                />
                <Radio
                  selected={original}
                  name="home"
                  value="no"
                  label="No"
                  onChange={this.handleChange}
                />
              </RadioGroup>
            </div>

            <div className="form-line">
              <RadioGroup
                inline={false}
                label="Do you work in a creative industry?"
                name="creative"
                onChange={this.handleChange}
                selectedValue={creative}
              >
                <Radio
                  selected={creative}
                  name="creative"
                  value="yes"
                  label="Yes"
                  onChange={this.handleChange}
                />
                <Radio
                  selected={creative}
                  name="creative"
                  value="no"
                  label="No"
                  onChange={this.handleChange}
                />
              </RadioGroup>
            </div>

            <div className="form-line">
              <div>
                <label className="bp3-label" htmlFor="jobTitle">
                  If yes, please provide your job title (e.g. museum curator,
                  artist, etc)
                </label>
                <div>
                  <input
                    id="jobTitle"
                    type="text"
                    dir="auto"
                    name="jobTitle"
                    value={jobTitle}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>

            <button className="bp3-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </Centered>
    );
  }
}
