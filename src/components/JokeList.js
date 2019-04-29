import React, { Component } from 'react';
import './JokeList.css';
import axios from 'axios';
import Joke from './Joke';

class JokeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokeURL: null
    }
  }

  async componentDidMount() {
  let res = await axios.get('https://icanhazdadjoke.com/', {headers: {Accept: "application/json"}});
    console.log(res.data.joke);
  }

  render() {
    return (
      <Joke />
    )
  }
}

export default JokeList;