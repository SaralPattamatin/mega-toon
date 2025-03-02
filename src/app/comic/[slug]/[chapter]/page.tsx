"use client";

import { ArrowUp } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { bluepage } from "@/constance/data";

export default function ReadChapter({}: //   params,
{
  params: { slug: string; chapter: string };
}) {
  // Unwrap params using React.use()
  //   const { slug, chapter } = React.use(params);

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {bluepage.map((book, index) => (
        <div key={index} className="flex items-center justify-center">
          {book.image ? (
            <div className="flex flex-col items-center">
              <Image
                alt="book"
                src={book.image}
                className="w-full object-cover"
              />
              {book.title}
            </div>
          ) : (
            <div>Image not available</div>
          )}
        </div>
      ))}

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-amber-500 text-white p-3 rounded-full shadow-md hover:bg-amber-600 transition-all"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}
