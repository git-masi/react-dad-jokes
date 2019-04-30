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
      jokes: ["Why do wizards clean their teeth three times a day? To prevent bat breath!", "What do prisoners use to call each other? Cell phones.", "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.", "What kind of magic do cows believe in? MOODOO.", "Why did the fireman wear red, white, and blue suspenders? To hold his pants up.", "How do you get two whales in a car? Start in England and drive West.", "What are the strongest days of the week? Saturday and Sunday...the rest are weekdays.", "I knew I shouldn't steal a mixer from work, but it was a whisk I was willing to take.", "Have you heard about the film 'Constipation', you probably haven't because it's not out yet.", "Why didn’t the skeleton cross the road? Because he had no guts."]
    };
  }

  async componentDidMount() {
    const oldJokes = [...this.state.jokes];
    let newJokes = [];
    while (newJokes.length < this.props.numJokesToGet) {
      let res = await axios.get('https://icanhazdadjoke.com/', {headers: {Accept: "application/json"}});
      if (!oldJokes.includes(res.data.joke)) newJokes.push(res.data.joke);
    }
    this.setState({jokes: [...oldJokes, ...newJokes]});
  }

  render() {
    return (
      <ul className="JokeList">
        {this.state.jokes.map(joke => (
            <li>{joke}</li>
          )
        )}
      </ul>
    )
  }
}

export default JokeList;