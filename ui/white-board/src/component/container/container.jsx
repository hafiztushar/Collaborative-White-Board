import React from "react";
import Board from "../board/board";
import "./style.css";
class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="color-picker-container">
          <h3>
            Pick color to draw: <br />
            <input type="color" name="color"></input>
          </h3>
        </div>
        <div className="board-container">
          <Board></Board>
        </div>
      </div>
    );
  }
}
export default Container;
