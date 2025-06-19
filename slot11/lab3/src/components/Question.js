import React from 'react';

function Question({ data, onAnswer }) {
  return (
    <div>
      <h2>{data.question}</h2>
      <ul>
        {data.options.map((option, idx) => (
          <li key={idx}>
            <button onClick={() => onAnswer(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
