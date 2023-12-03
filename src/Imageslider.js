import React from 'react';
import './Imageslider.css';

const ImageSlider = ({ images, activeIndex, setActiveIndex }) => {
  const goToPrevious = () => {
    const isFirstImage = activeIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = activeIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  };

  return (
    <div className="image-slider">
      <button onClick={goToPrevious} className="arrow left-arrow">&#8592;</button>
      {images.map((image, index) => (
        <img 
          key={image} 
          src={image} 
          height={500}
          width={700}
          alt={`Slide ${index}`} 
          className={index === activeIndex ? 'active' : 'hidden'}
        />
      ))}
      <button onClick={goToNext} className="arrow right-arrow">&#8594;</button>
    </div>
  );
};

export default ImageSlider;
