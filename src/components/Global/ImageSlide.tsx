// "use client";

// import React from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import Image, { StaticImageData } from "next/image";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // import required modules
// import { Autoplay, Pagination } from "swiper/modules";

// interface ImageSliderProps {
//   images: StaticImageData[];
// }

// const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
//   return (
//     <Swiper
//       pagination={true}
//       modules={[Pagination, Autoplay]}
//       autoplay={{ delay: 5000 }}
//       loop={true}
//     >
//       {images.map((thumbnail, index) => (
//         <SwiperSlide key={index}>
//           <Image
//             src={thumbnail}
//             alt={`Thumbnail ${index + 1}`}
//             className="w-full h-[500px] object-cover"
//             width={1000}
//             height={500}
//           />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default ImageSlider;

"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image, { StaticImageData } from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

interface ImageSliderProps {
  images: StaticImageData[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0); // เก็บ index ปัจจุบัน

  return (
    <div className="relative w-full h-[500px] overflow-hidden flex justify-center items-center">
      {/* 🔹 ภาพพื้นหลังเบลอ */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image
          src={images[activeIndex]}
          alt="Background Blur"
          layout="fill"
          objectFit="cover"
          className="blur-xl scale-110 transition-all duration-500"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="w-[800px] h-[400px] z-10">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full h-full"
        >
          {images.map((thumbnail, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[500px] flex justify-center items-center ">
                <Image
                  src={thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                  width={800}
                  height={400}
                  className="w-[800px] h-[500px] object-cover shadow-2xl"
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;
