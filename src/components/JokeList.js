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
      jokes: window.localStorage.getItem('jokes') ? JSON.parse(window.localStorage.getItem('jokes')) : []
    };
    console.log(this.state.jokes);
    this.seenJokes = new Set(this.state.jokes.map(joke => joke.id));
    console.log(this.seenJokes);
    this.voteHandler = this.voteHandler.bind(this);
    this.getJokes = this.getJokes.bind(this);
    this.updateLocalStorage = this.updateLocalStorage.bind(this);
  };

  componentDidMount() {
    if (this.state.jokes.length === 0) this.getJokes();
  };

  async getJokes() {
    try {
      const oldJokes = [...this.state.jokes];
      let newJokes = [];
      while (newJokes.length < this.props.numJokesToGet) {
        let res = await axios.get('https://icanhazdadjoke.co/', {headers: {Accept: "application/json"}});
        const joke = {jokeText: res.data.joke, id: res.data.id, votes: 0}
        if (!this.seenJokes.has(joke.id)) newJokes.push(joke);
      }
      this.setState({jokes: [...oldJokes, ...newJokes]}, this.updateLocalStorage);
    } catch(e) {
      this.props.error(e);
    }
  }

  updateLocalStorage() {
    window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes));
  }

  voteHandler(id, plusMinus) {
    this.setState(this.state.jokes.map(joke => {
          if(joke.id === id) joke.votes += plusMinus;
          return joke;
        }
      ),
      this.updateLocalStorage
    )
  };

  jokeButtonHander() {
    this.getJokes();
  }

  render() {
    let jokes = this.state.jokes.sort((a,b) => b.votes - a.votes);
    const displayJokes = jokes.map(joke => (
      <Joke
        text={joke.jokeText}
        id={joke.id}
        key={joke.id}
        votes={joke.votes}
        click={this.voteHandler}
      />
    ));

    return (
      <div className="JokeList" style={{display: this.props.hide ? 'none' : null}}>
        {displayJokes}
      </div>
    )
  }
}

export default JokeList;