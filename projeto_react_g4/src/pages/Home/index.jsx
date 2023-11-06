import React from "react";
import "./style.css";



import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';

export default function Home() {
  const data = [
    {id: '1', image:'../../src/assets/promo1.jpeg'},
    {id: '2', image:'../../src/assets/promo2.jpeg'},
    {id: '2', image:'../../src/assets/banner-1.png'},
    {id: '2', image:'https://loremflickr.com/1963/560'},
    {id: '3', image:'../../src/assets/promo3.jpeg'}
  ]
  return (
    <div>
      
      <div className="carousel">
      <Swiper
       modules={[ Pagination, Scrollbar, A11y,Autoplay, EffectCube]}
        autoplay={{
          delay:3000,
          disableOnInteraction:false
        }}
       slidesPerView={1}
       pagination={{ clickable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale:0.94,
      }}
      
    >
      {data.map((itens)=>(
        <SwiperSlide key={itens.id}>
          <img src={itens.image} alt="Slider" className="slider-imagem" />
        </SwiperSlide>
      ))}
      
    </Swiper>
      </div>
    </div>
  );
}
