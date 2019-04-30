import React, { Component } from 'react';
import './JokeList.css';
import axios from 'axios';
import Joke from './Joke';

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10
  };

  constructor(props) {
    super(props);
    this.state = {
      jokes: [{jokeText: "What does a pirate pay for his corn? A buccaneer!", id: "QuscibaMClb", votes: 0}]
    };
  }

  async componentDidMount() {
    const oldJokes = [...this.state.jokes];
    let newJokes = [];
    while (newJokes.length < this.props.numJokesToGet) {
      let res = await axios.get('https://icanhazdadjoke.com/', {headers: {Accept: "application/json"}});
      const joke = {jokeText: res.data.joke, id: res.data.id, votes: 0}
      if (!oldJokes.includes(joke)) newJokes.push(joke);
    }
    this.setState({jokes: [...oldJokes, ...newJokes]});
    // console.log(this.state.jokes);
  }

  
  render() {
    const displayJokes = this.state.jokes.map(joke => (
      <Joke
        text={joke.jokeText}
        id={joke.id}
        key={joke.id}
        votes={joke.votes}
      />
    ));

    return (
      <div className="JokeList">
        {displayJokes}
      </div>
    )
  }
}

export default JokeList;