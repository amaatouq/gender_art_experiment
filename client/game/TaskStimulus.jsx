import React from "react";

export default class TaskStimulus extends React.Component {
  render() {
    const { round, stage, player } = this.props;

    const similarArtists = _.map(round.get("relatedArtists"), function(r) {
      return <li>{r}</li>;
    });

    const imagePath = round.get("imagePath")
      ? round.get("imagePath")
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/600px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg";
    console.log(imagePath);
    const questionText = stage.get("questionText");
    const subQuestionText = stage.get("subQuestionText");

    return (
      <div className="task-stimulus">
        <div className="task-information">
          <div className="artist">
            <h4 className="bp3-heading" style={{ color: '#F1AF1B' }}>ARTIST</h4>
            <h1 className="bp3-heading">{round.get("artistName")}</h1>
          </div>

          <div className="related-artists bp3-ui-text large">
            <p style={{ color: '#F1AF1B' }}><font size="3">SIMILAR ARTISTS</font></p>
            <ul><font size="3">{similarArtists}</font></ul>
          </div>
        </div>

        <div className="task-image">
          {imagePath === undefined ? (
            ""
          ) : (
            <img src={"./data/" + imagePath} height={"300px"} />
          )}

          <div className="title-year bp3-ui-text" style={{ color: '#666' }}><i>
            {`'${round.get("title")}' (${round.get("year")})`}</i>
          </div>
          <div className="dimensions bp3-ui-text" style={{ color: '#666' }}>
            {`${round.get("width")}in X ${round.get("height")}in`}
          </div>
          <div className="medium bp3-ui-text" style={{ color: '#666' }}>
            {round.get("medium")}
          </div>
        </div>

        <div className="task-question bp3-ui-text large">
          <p>{questionText === undefined ? "" : questionText}</p>
        </div>
        <div className="task-subquestion bp3-ui-text">
          <p>{subQuestionText ? subQuestionText : ""}</p>
        </div>
      </div>
    );
  }
}
