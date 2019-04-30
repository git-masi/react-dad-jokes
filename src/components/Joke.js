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

  getColor() {
    const votes = this.props.votes;
    switch (true) {
      case votes >= 15 :
        return "#4CAF50";
      case votes >= 12 :
        return "#8BC34A";
      case votes >= 9 :
        return "#CDDC39";
      case votes >= 6 :
        return "#FFEB3B";
      case votes >= 3 :
        return "#FFC107";
      case votes >= 0 :
        return "#FF9800";
      default:
        return "#f44336";
    }
  }
  getEmoji() {
    if (this.props.votes >= 15) {
      return "em em-rolling_on_the_floor_laughing";
    } else if (this.props.votes >= 12) {
      return "em em-laughing";
    } else if (this.props.votes >= 9) {
      return "em em-smiley";
    } else if (this.props.votes >= 6) {
      return "em em-slightly_smiling_face";
    } else if (this.props.votes >= 3) {
      return "em em-neutral_face";
    } else if (this.props.votes >= 0) {
      return "em em-confused";
    } else {
      return "em em-angry";
    }
  }

  render() {
    return (
      <div className="Joke">
        <div className="Joke-vote-container">
          <i onClick={this.voteUp} className="far fa-thumbs-up"></i>
          <span className="Joke-votes" style={{borderColor: this.getColor()}}>{this.props.votes}</span>
          <i onClick={this.voteDown} className="far fa-thumbs-down"></i>
        </div>
        <div className="Joke-text">{this.props.text}</div>
        <i className={this.getEmoji()}></i>
      </div>
    )
  }
}

export default Joke;