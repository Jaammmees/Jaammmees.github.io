import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ImageSlider({ images }) {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    };
  
    return (
      <div style={{ width: '100%' }}>
        <Slider {...settings}>
          {images.map((img, index) =>
            <div key={index} style={{ width: '100%' }}>
              <img src={img} alt={`slide-${index}`} style={{ width: '100%', height: 'auto' }} />
            </div>
          )}
        </Slider>
      </div>
    );
  }

export default ImageSlider;
