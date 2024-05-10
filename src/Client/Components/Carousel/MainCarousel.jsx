import React from "react";
import AliceCarousel from "react-alice-carousel";
import { CarouselData } from "./MainCarouselData";
import "react-alice-carousel/lib/alice-carousel.css";

const MainCarousel = () => {
  const items = CarouselData.map((item) => (
    <img src={item.image} alt={item.alt} className=" cursor-pointer" />
  ));

  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={3000}
      infinite
    />
  );
};

export default MainCarousel;
