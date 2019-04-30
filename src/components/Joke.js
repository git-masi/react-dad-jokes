import React, { Component } from 'react';
import './Joke.css'
  
class Joke extends Component {
  constructor(props) {
    super(props);
    this.voteUp = this.voteUp.bind(this);
    this.voteDown = this.voteDown.bind(this);
  }

  voteUp() {
    this.props.click(this.props.id, 1);
  }

  voteDown() {
    this.props.click(this.props.id, -1);
  }

  render() {
    return (
      <div className="Joke">
        <div className="Joke-vote-container">
          <i onClick={this.voteUp} className="far fa-thumbs-up"></i>
          <span className="Joke-votes">{this.props.votes}</span>
          <i onClick={this.voteDown} className="far fa-thumbs-down"></i>
        </div>
        <div className="Joke-text">{this.props.text}</div>
        {/* <div>emoji goes here</div> */}
      </div>
    )
  }
}

export default Joke;