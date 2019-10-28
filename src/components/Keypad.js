import React, { Component } from 'react';

export default class Keypad extends Component {

    submit = () => {
        console.log('Entering password...');
      }
     
    render() {
        return (
            <input onKeyUp={this.submit} type='password'>Enter Password</input>
        );
    }
}