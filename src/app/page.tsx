"use client";

import React from "react";
import { useState } from "react";

import thumbnail_1 from "@/assets/thumnel/Thumbnail_4.jpg";
import thumbnail_2 from "@/assets/thumnel/Thumbnail_5.jpg";
import thumbnail_3 from "@/assets/thumnel/thumbnail_2.jpg";

import { bookList } from "@/constance/data";

import ImageSlide from "@/components/Global/ImageSlide";
import Image from "next/image";
import Link from "next/link";

// import MianPadding from "@/components/Global/MainPadding";

export default function App() {
  const thumbnails = [thumbnail_1, thumbnail_2, thumbnail_3];
  const days = [
    "จันทร์",
    "อังคาร",
    "พุธ",
    "พฤหัสบดี",
    "ศุกร์",
    "เสาร์",
    "อาทิตย์",
  ];
  const [selectedDay, setSelectedDay] = useState("จันทร์");
  return (
    <div className="mt-[80px]">
      <ImageSlide images={thumbnails} />
      <div className="flex  space-x-4 w-full shadow px-[200px] h-[60px]">
        {days.map((day, index) => (
          <div
            key={index}
            onClick={() => setSelectedDay(day)}
            className={`h-full w-full cursor-pointer text-center flex items-center justify-center ${
              selectedDay === day
                ? "bg-amber-500 text-white"
                : "bg-white text-black hover:text-amber-500"
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4 py-5 px-[200px]">
        {bookList.map((comic) => (
          <Link key={comic.title} href={`/comic/${comic.title}`}>
            <div className="  flex items-center justify-center">
              {comic.image ? (
                <div className="flex flex-col items-center hover:scale-105 transition duration-300 ease-in-out">
                  <Image
                    alt="comic"
                    src={comic.image}
                    layout="object-cover "
                    className="w-full "
                  />
                  {comic.title}
                </div>
              ) : (
                <div>Image not available</div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
