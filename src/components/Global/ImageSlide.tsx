"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image, { StaticImageData } from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

interface ImageSliderProps {
  images: StaticImageData[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 5000 }}
      loop={true}
    >
      {images.map((thumbnail, index) => (
        <SwiperSlide key={index}>
          <Image
            src={thumbnail}
            alt={`Thumbnail ${index + 1}`}
            className="w-full h-[500px] object-cover"
            width={1000}
            height={500}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
