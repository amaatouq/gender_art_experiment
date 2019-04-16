import React from "react";

import { ProgressBar } from "@blueprintjs/core";

import PlayerProfile from "./PlayerProfile.jsx";
import SocialInteractions from "./SocialInteractions.jsx";
import Task from "./Task.jsx";

export default class Round extends React.Component {
  render() {
    const { round, stage, player, game } = this.props;

    return (
      <div className="round">
        <div className="progress-bar">
          Progress Bar:{" "}
          <ProgressBar
            stripes={false}
            animate={false}
            intent={"primary"}
            value={(round.index + 1) / game.rounds.length}
          />
        </div>
        <div className="content">
          <PlayerProfile player={player} stage={stage} game={game} />
          <Task game={game} round={round} stage={stage} player={player} />
          {stage.get("type") === "social" ? (
            <SocialInteractions
              game={game}
              stage={stage}
              player={player}
              round={round}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
