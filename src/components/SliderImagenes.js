import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderImagenes() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,          // ✅ corregido
    autoplaySpeed: 3000,
    arrows: true
  };

  return (
    <div style={{ margin: '30px auto', width: '90%', maxWidth: '800px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '15px' }}>Nuestras Entregas</h2>
      <Slider {...settings}>
        <div><img src="/images/slider1.jpg" alt="Entrega 1" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }} /></div>
        <div><img src="/images/slider2.jpg" alt="Entrega 2" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }} /></div> {/* ✅ corregido */}
        <div><img src="/images/slider3.jpg" alt="Entrega 3" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }} /></div>
      </Slider>
    </div>
  );
}