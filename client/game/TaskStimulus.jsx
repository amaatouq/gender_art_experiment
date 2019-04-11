import React from "react";

export default class TaskStimulus extends React.Component {
  render() {
    const { round, stage, player } = this.props;


    const imagePath = round.get("imagePath")
      ? round.get("imagePath")
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/600px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg";
    console.log(imagePath)
    const questionText = stage.get("questionText");
    return (
      <div className="task-stimulus">
        <div className="task-image">
          {imagePath === undefined ? (
            ""
          ) : (
            <img src={"./data/"+imagePath} height={"300px"} />
          )}
        </div>
        <div className="task-information">
          <h1 className="artist bp3-heading">{"Artist: " + round.get("artistName")}</h1>
          <div className="title-year bp3-ui-text">{`'${round.get(
            "title"
          )}' (${round.get("year")})`}</div>
          <div className="related-artists bp3-ui-text">
            <h2 className="bp3-heading">Similar Artists</h2>
            {round.get("relatedArtists").join("\n")}
          </div>
        </div>
        <div className="task-question bp3-ui-text">
          <b>{questionText == undefined ? "" : questionText}</b>
        </div>
      </div>
    );
  }
}
