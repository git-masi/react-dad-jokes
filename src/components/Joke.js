import React, { Component } from 'react';
import './Joke.css'
  
class Joke extends Component {
  constructor(props) {
    super(props);
    this.voteUp = this.voteUp.bind(this);
    this.voteDown = this.voteDown.bind(this);
    this.getColor =this.getColor.bind(this);
    this.getEmoji =this.getEmoji.bind(this);
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
    const votes = this.props.votes;
    switch (true) {
      case votes >= 15 :
        return "em em-rolling_on_the_floor_laughing";
      case votes >= 12 :
        return "em em-laughing";
      case votes >= 9 :
        return "em em-smiley";
      case votes >= 6 :
        return "em em-slightly_smiling_face";
      case votes >= 3 :
        return "em em-neutral_face";
      case votes >= 0 :
        return "em em-confused";
      default:
        return "em em-angry";
    }
  }

  render() {
    return (
      <div className="Joke">
        <div className="Joke-vote-container">
          <i onClick={this.voteUp} className="far fa-thumbs-up" role="button"></i>
          <span className="Joke-votes" style={{borderColor: this.getColor()}}>{this.props.votes}</span>
          <i onClick={this.voteDown} className="far fa-thumbs-down" role="button"></i>
        </div>
        <div className="Joke-text">{this.props.text}</div>
        <i className={`${this.getEmoji()} joke-emoji-animate`}></i>
      </div>
    )
  }
}

export default Joke;