// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  constructor() {
      super()
      this.state = {
          eyes: 'none'
      }
  }

  focus = () => {
    return console.log('Good!')
  }

  blur = () => {
    return console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onFocus={this.focus} onBlur={this.blur}>click here!</button>
    );
  }

}
