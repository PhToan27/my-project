// src/components/CardColumns.js
import React from 'react';

const CardColumns = () => {
  const cards = [
    {
      color: 'primary',
      text: 'Some text inside the first card',
      img: 'oto.jpg',
    },
    {
      color: 'warning',
      text: 'Some text inside the first card',
      img: 'oto.jpg',
    },
    {
      color: 'danger',
      text: 'Some text inside the first card',
      img: 'oto.jpg',
    },
  ];

  return (
    <div className="container p-4">
      <h5 className="mt-4"><em>Exercises</em></h5>
      <h6><strong>Cards Columns</strong></h6>
      <div className="row text-center">
        {cards.map((card, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className={`card border border-4 border-${card.color}`}>
              <img src={card.img} className="card-img-top" alt="Car" />
              <div className={`card-footer bg-${card.color} text-white`}>
                {card.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardColumns;
