import React, { Component } from "react";

export class Keypad extends Component {
  handleInput = () => {
    console.log("Entering password...");
  };

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.handleInput} />
      </div>
    );
  }
}

export default Keypad;
