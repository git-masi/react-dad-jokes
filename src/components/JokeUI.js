import React, { Component } from 'react';
import './JokeUI.css'
import JokeList from './JokeList';
  
class JokeUI extends Component {
  render() {
    return (
      <div className="JokeUI">
        <JokeList />
      </div>
    )
  }
}

export default JokeUI;