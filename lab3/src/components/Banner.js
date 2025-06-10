import React from 'react';
import { Carousel } from 'react-bootstrap';

function Banner() {
    return (
        <Carousel>
            {['pizza1', 'pizza2', 'pizza3'].map((img, index) => (
                <Carousel.Item key={index}>
                    <img className="d-block w-100" src={`/images/${img}.png`} alt={`Slide ${index}`} />
                    <Carousel.Caption>
                        <h2>Delicious Variety</h2>
                        <p>Fresh, hot, and ready to serve.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Banner;