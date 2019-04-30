import React, { Component } from 'react';
import './JokeUI.css'
import JokeList from './JokeList';
import SideBar from './SideBar';
  
class JokeUI extends Component {
  render() {
    return (
      <div className="JokeUI">
        <SideBar />
        <JokeList />
        <footer className="footer">
          <a href='https://dryicons.com/free-icons/emoji-icons'> Icon by Dryicons </a>
        </footer>
      </div>
    )
  }
}

export default JokeUI;