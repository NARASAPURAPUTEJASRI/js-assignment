//Carousel Component

import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div>
      <button onClick={prev}>Previous</button>
      <img src={images[index]} alt="carousel" />
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Carousel;
