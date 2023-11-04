import React from "react";
import "./style.css";
import HeaderMain from "../../components/HeaderMain/index.jsx";
import { Link } from "react-router-dom";
import Header from "../../components/Header/index.jsx";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Home() {
  const data = [
    {id: '1', image:'../../src/img/promo1.jpeg'},
    {id: '2', image:'../../src/img/promo2.jpeg'},
    {id: '3', image:'../../src/img/promo3.jpeg'}
  ]
  return (
    <div>
      <Header />
      <div>
      <Swiper
       modules={[ Pagination, Scrollbar, A11y]}
   
       slidesPerView={1}
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
    >
      {data.map((itens)=>(
        <SwiperSlide key={itens.id}>
          <img src={itens.image} alt="Slider" className="slider-imagem" />
        </SwiperSlide>
      ))}
      
    </Swiper>
      </div>
      {/* <main>
        <div className="cards">
          <div className="card">
            <header>
              <h2>Consumindo API</h2>
            </header>
            <div className="line"></div>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan
              disputationi eu sit. Vide electram sadipscing et per. Per aumento
              de cachacis, eu reclamis. Paisis, filhis, espiritis santis.
              Cevadis im ampola pa arma uma pindureta.
            </p>
            <div className="btns">
              <div className="btn-edit">
                <Link to = '/contato'>
                  <button>Contato</button>
                </Link>
              </div>
              <div className="btn-more">
                <Link to ='/sobre'>
                  <button>Ler Mais</button>
                </Link>
              </div>
              
              <div className="btn-delete">
              <Link to ='/produto'>
                  <button>Produto</button>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </main> */}
    </div>
  );
}
