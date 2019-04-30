import React, { Component } from 'react';
import './Joke.css'
  
class Joke extends Component {
  render() {
    return (
      <div className="Joke">
        <div className="Joke-vote-container">
          <i className="far fa-thumbs-up"></i>
          <span>{this.props.votes}</span>
          <i className="far fa-thumbs-down"></i>
        </div>
        <div>{this.props.text}</div>
        {/* <div>emoji goes here</div> */}
      </div>
    )
  }
}

export default Joke;