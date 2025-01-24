import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const featuredCars = [
  {
    id: 1,
image:'https://www.completecar.ie/img/galleries/10807/bmw_m4_competition_coupe_blue_2021_013.jpg',
    title: 'BMW M4 Competition'
  },
  {
    id: 2,
    image: 'https://www.carscoops.com/wp-content/uploads/2021/10/Mercedes-AMG-GT.jpg',
    title: 'Mercedes AMG GT'
  },
  {
    id: 3,
    image: 'https://cdn.motor1.com/images/mgl/nYWJy/s1/2021-porsche-911-gt3-prototype-rear-quarter-dynamic.jpg',
    title: 'Porsche 911 GT3'
  }
];

export default function CarSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Slider {...settings}>
        {featuredCars.map((car) => (
          <div key={car.id} className="relative h-[500px]">
            <img
              src={car.image}
              alt={car.title}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h3 className="text-white text-2xl font-bold">{car.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}