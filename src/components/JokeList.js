import React from 'react';
import './JokeList.css';
import Joke from './Joke';
import Loader from './Loader';

const JokeList = ({data, voteHandler, hide, loading}) => {
  let jokes = data.sort((a,b) => b.votes - a.votes);
  const displayJokes = jokes.map(joke => (
    <Joke
      text={joke.jokeText}
      id={joke.id}
      key={joke.id}
      votes={joke.votes}
      click={voteHandler}
    />
  ));

  return (!loading 
    ? (
        <div className="JokeList">
          {displayJokes}
        </div>
      )
    : <Loader />
  )
}

export default JokeList;