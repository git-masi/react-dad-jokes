import React, { Component } from 'react';
import './JokeUI.css'
import JokeList from './JokeList';
import SideBar from './SideBar';
import Loader from './Loader';
  
class JokeUI extends Component {
  constructor() {
    super();
    this.state = {
      loading: false
    }
    this.endLoading = this.endLoading.bind(this);
  }

  clickHandler = () => {
    this.toggle.jokeButtonHander();
    this.setState({loading: true}, this.endLoading());
  }

  endLoading() {
    setTimeout(() => {
      this.setState({loading: false})
    }, 1500);
  }

  render() {
    return (
      <div className="JokeUI">
        <SideBar click={this.clickHandler} disabled={this.state.loading}/>
        <Loader hide={this.state.loading}/>
        <JokeList ref={toggle => this.toggle = toggle} hide={this.state.loading}/>
        <footer className="footer">
          <a href='https://dryicons.com/free-icons/emoji-icons'> Icon by Dryicons </a>
        </footer>
      </div>
    )
  }
}

export default JokeUI;