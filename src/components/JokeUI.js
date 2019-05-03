import React, { Component } from 'react';
import './JokeUI.css';
import axios from 'axios';
import JokeList from './JokeList';
import SideBar from './SideBar';

class JokeUI extends Component {
  static defaultProps = {
    numJokesToGet: 10
  };

  state = {
    jokes: window.localStorage.getItem('jokes') ? JSON.parse(window.localStorage.getItem('jokes')) : [],
    loading: false
  };
  seenJokes = new Set(this.state.jokes.map(joke => joke.id));

  componentDidMount() {
    if (this.state.jokes.length === 0) this.getJokes();
  };

  getJoke = async () => {
    const res = await axios.get(
      'https://icanhazdadjoke.com/',
      { headers: { Accept: "application/json" } }
    );
    return { jokeText: res.data.joke, id: res.data.id, votes: 0 };
  }

  getJokes = async () => {
    this.setState({ loading: true });

    try {
      const newJokes = [];

      while (newJokes.length < this.props.numJokesToGet) {
        const joke = await this.getJoke();
        if (!this.seenJokes.has(joke.id)) newJokes.push(joke);
      }

      this.setState({jokes: [...this.state.jokes, ...newJokes]}, this.afterLoading);
    } catch(e) {
      console.log(e);
      this.setState({loading: false})
    }
  }

  afterLoading = () => {
    setTimeout(() => {
      this.setState({loading: false})
    }, 1500);

    this.updateLocalStorage();
  }

  updateLocalStorage = () => {
    window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes));
  }

  voteHandler = (id, plusMinus) => {
    this.setState({
      jokes: this.state.jokes.map(joke => {
        if (joke.id === id) joke.votes += plusMinus;
        return joke;
      }
      )
    },
      this.updateLocalStorage
    )
  };

  render() {
    return (
      <div className="JokeUI">
        <SideBar onClick={this.getJokes} disabled={this.state.loading}/>
        <JokeList
          data={this.state.jokes}
          loading={this.state.loading}
          voteHandler={this.voteHandler}
        />
        <footer className="footer">
          <a href='https://dryicons.com/free-icons/emoji-icons'> Icon by Dryicons </a>
        </footer>
      </div>
    )
  }
}

export default JokeUI;