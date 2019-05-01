import React, { Component } from 'react';
import './JokeUI.css'
import JokeList from './JokeList';
import SideBar from './SideBar';
  
class JokeUI extends Component {
  constructor() {
    super()
    this.state = {
      clicked: false
    }
  }

  clickHandler = () => {
    this.toggle.jokeButtonHander();
  }

  render() {
    return (
      <div className="JokeUI">
        <SideBar click={this.clickHandler}/>
        <JokeList ref={toggle => this.toggle = toggle}/>
        <footer className="footer">
          <a href='https://dryicons.com/free-icons/emoji-icons'> Icon by Dryicons </a>
        </footer>
      </div>
    )
  }
}

export default JokeUI;