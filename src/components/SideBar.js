import React, { Component } from 'react';
import './SideBar.css';
import cryLaughEmoji from '../assets/images/crying-laughing-emoji.svg';
  
class SideBar extends Component {
  render() {
    const { onClick, disabled } = this.props;

    return (
      <div className="SideBar">
        <h1><span>Dad</span> Jokes</h1>
        <img src={cryLaughEmoji} alt="crying laughing emoji"/>
        <button onClick={onClick} className="SidebarButton" disabled={disabled}>Get Jokes</button>
      </div>
    )
  }
}

export default SideBar;