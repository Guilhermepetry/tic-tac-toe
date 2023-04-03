import "./style.css";
import playerFirst from "../../assets/images/cross.png";
import playerSecond from "../../assets/images/zero.png";

function Player({ player }) {
  const playerTurn = [];
  playerTurn["first"] = playerFirst;
  playerTurn["second"] = playerSecond;
  return (
    <button className="player">
      <img
        className="playerImage"
        src={player === "first" ? playerFirst : playerSecond}
        alt={`Player ${player}`}
      />
    </button>
  );
}

export default Player;
