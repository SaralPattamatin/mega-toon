"use client";

import React, { useState } from "react";
import { bookList, days, thumbnails } from "@/constance/data";
import ImageSlide from "@/components/Global/ImageSlide";
import Image, { StaticImageData } from "next/image";

import MainPadding from "@/components/Global/MainPadding";

export default function App() {
  const [selectedDay, setSelectedDay] = useState("จันทร์");

  return (
    <div className="mt-[80px]">
      <ImageSlide
        images={
          thumbnails
            .map((item) => item.image)
            .filter(Boolean) as StaticImageData[]
        }
      />

      <MainPadding className="grid gap-5">
        <div className="flex space-x-4 w-full shadow px-[200px] h-[60px]">
          {days.map((day, index) => (
            <div
              key={index}
              onClick={() => setSelectedDay(day.title as string)}
              className={`h-full w-full cursor-pointer text-center flex items-center justify-center ${
                selectedDay === day.title
                  ? "bg-amber-500 text-white"
                  : "bg-white text-black hover:text-amber-500"
              }`}
            >
              {day.title}
            </div>
          ))}
        </div>

        <div className="grid grid-rows-2 gap-4 ">
          {/* First row */}
          <div className="grid grid-cols-5 gap-4 w-full px-[200px] h-[250px]">
            {bookList.slice(0, 5).map((book) => (
              <div key={book.title} className="bg-amber-500 h-full relative">
                <Image
                  alt="comic"
                  src={book.image ?? "/default-image.jpg"}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Second row */}
          <div className="grid grid-cols-5 gap-4 px-[200px] h-[250px]">
            {bookList.slice(5).map((book, index) => (
              <div
                key={book.title}
                className={`bg-amber-500 h-full ${
                  index === 0 ? "col-span-2" : ""
                } relative`}
              >
                <Image
                  alt="comic"
                  src={book.image ?? "/default-image.jpg"}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mx-[200px] h-[200px] bg-violet-500 "></div>
      </MainPadding>
    </div>
  );
}
