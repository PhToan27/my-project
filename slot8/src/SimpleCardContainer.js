import React from 'react';
import SimpleCard from './SimpleCard';

function SimpleCardContainer() {
  const item = {
    title: 'React Card',
    description: 'This is a simple card built with React Bootstrap.',
    imageUrl: 'https://via.placeholder.com/150'
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <SimpleCard item={item} />
    </div>
  );
}

export default SimpleCardContainer;
