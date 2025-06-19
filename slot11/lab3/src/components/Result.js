import React from 'react';

function Result({ score, total, onReplay }) {
  return (
    <div>
      <h2>Your Score: {score} / {total}</h2>
      <button onClick={onReplay}>Replay</button>
    </div>
  );
}

export default Result;
