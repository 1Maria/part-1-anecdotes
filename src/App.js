import React, { useState } from 'react';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);

const VoteNumber = ({votes, selected})  => (
  <div>
    {`has ${votes[selected]} votes`}
  </div>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often', 
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...the remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.', 
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log() is the same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [votes, setVotes] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf, 0));
  // const [votes, setVotes] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf, 0));
  const [selected, setSelected] = useState(0);

  // const points = Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf, 0);
  console.log("Hippo", votes);
  console.log("slipper", votes[selected]);

  const handleVotes = () => {
    console.log("Rhino", votes);
    // // const copyVotes = [...votes];
    // // setVotes(copyVotes[selected] += 1);
    // console.log("shoe", votes[selected]);
    // // setVotes(votes.splice(selected, 1, votes[selected] + 1));
    // setVotes(votes.slice(2, 1, 3));
    let votesCount = [...votes];
    let voteCount = votesCount[selected] + 1;
    votesCount[selected] = voteCount;
    setVotes(votesCount);
  }

  const handleSelected = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  return (
    <div>
      <div>
      {anecdotes[selected]}
      </div>
      <VoteNumber votes={votes} selected={selected} />
      <span style={{ marginLeft: '0.5em', }}>
        <Button handleClick={handleVotes} text='vote' />
      </span>
      <span style={{ marginLeft: '0.5em', }}>
        <Button handleClick={handleSelected} text='next anecdote' />
      </span>
    </div>
  );
}

export default App;
