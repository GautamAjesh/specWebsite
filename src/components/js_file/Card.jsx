import React from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import "../css_file/Cards.css";
const products3 = [
    {
        id: 1,
        image: "https://static1.lenskart.com/media/desktop/img/Sep21/image179.png",
        name: 'Round',
    },
    {
        id: 2,
        image: "https://static1.lenskart.com/media/desktop/img/Sep21/cateeye.jpg",
        name: 'Cat-Eye',
    },
    {
        id: 3,
        image: "https://static1.lenskart.com/media/desktop/img/Sep21/clubmaster.jpg",
        name: 'Clubmaster',
    },
    {
        id: 4,
        image: "https://static1.lenskart.com/media/desktop/img/Sep21/trans.jpg",
        name: 'Transparent',
    },
    {
        id: 5,
        image: "https://static1.lenskart.com/media/desktop/img/Sep21/blend.jpg",
        name: 'Blend Edit',
    },
    {
        id: 6,
        image: "https://static1.lenskart.com/media/desktop/img/Sep21/clipon.jpg",
        name: 'Air Clip On',
    },
    {
        id: 7,
        image: "https://static1.lenskart.com/media/desktop/img/Sep21/airflex.jpg",
        name: 'Air Flex',
    },
    {
        id: 8,
        image: "https://static1.lenskart.com/media/desktop/img/Sep21/aviator.jpg",
        name: 'Retro Aviator',
    },

]
const Cards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay:true,
    autoplaySpeed:1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="scards">
      <Slider {...settings}>
        {products3.map((item) => (
          <div className="scard">
            <div className="imgBox">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="content">
              <div className="details ">
                <h2>
                  {item.name} 
                </h2>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Cards;
