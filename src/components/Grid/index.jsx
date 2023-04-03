import "./style.css";
import Card from "../../objects/Card";
import Player from "../../objects/Player";

function Grid() {
  return (
    <Card>
      <ul className="grid" role="list">
        <li className="item">
          <Player player="first" />
        </li>
        <li className="item">
          <Player player="second" />
        </li>
        <li className="item">
          <Player player="first" />
        </li>
        <li className="item">
          <Player player="first" />
        </li>
        <li className="item">
          <Player player="second" />
        </li>
        <li className="item">
          <Player player="first" />
        </li>
        <li className="item">
          <Player player="first" />
        </li>
        <li className="item">
          <Player player="second" />
        </li>
        <li className="item">
          <Player player="first" />
        </li>
      </ul>
    </Card>
  );
}

export default Grid;
