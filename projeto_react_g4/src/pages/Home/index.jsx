import React from "react";
import "./style.css";

import { Pagination, Scrollbar, A11y, Autoplay, EffectCube } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import Player1 from "../../components/Player";

export default function Home() {
  const data = [
    { id: '1', image: '../../src/assets/promo1.jpeg' },
    { id: '2', image: '../../src/assets/promo2.jpeg' },
    { id: '3', image: '../../src/assets/promo3.jpeg' }
  ]
  return (
    <div>



      <div>
        <Swiper
          modules={[EffectCube, Pagination, Scrollbar, A11y, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          effect={'cube'}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {data.map((itens) => (
            <SwiperSlide key={itens.id}>
              <div className="dono">
              <img src={itens.image} alt="Slider" className="slider-imagem" />
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </div>
  );
}
