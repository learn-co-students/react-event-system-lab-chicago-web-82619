// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {

    constructor() {
        super()
        this.state = {
            keyboard: 0
        }
    }

    submit = () => {
      return console.log('Entering password...')
    }

    render() {
        return (
          <input onKeyUp={this.submit} type="password" />
        )
    }


}
