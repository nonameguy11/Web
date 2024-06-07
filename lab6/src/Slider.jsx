import React, { useState } from 'react';
import './Slider.css'; // Подключение CSS файла для стилизации

function Slider({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = () => {
      const newIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const newIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    return (
      <div className="slider-container">
        <button className="prev-btn" onClick={prevSlide}>&lt;</button>
        <div className="slider" style={{ width: `${images.length * 100}%`, transform: `translateX(-${currentIndex * (100 / images.length)}%)` }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="slider-image"
              style={{ width: `${100 / images.length}%` }}
            />
          ))}
        </div>
        <button className="next-btn" onClick={nextSlide}>&gt;</button>
      </div>
    );
  }  

export default Slider;
