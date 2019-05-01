import React from 'react';
import './Loader.css';

const Loader = props => {
  return (
    <div className="Loader" style={{display: props.hide ? null : 'none'}}>
      <i className="far fa-8x fa-laugh-beam fa-spin"></i>
      <h2>Loading...</h2>
    </div>
  )
}

export default Loader;