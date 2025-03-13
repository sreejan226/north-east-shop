"use client";

import React, { useState } from "react";
import Image from "next/image";

const GameCard = ({ game, isActive, onClick }) => {
  console.log(game);
  return (
    <div
      className={`relative h-full rounded-3xl overflow-hidden flex items-end cursor-pointer transition-[flex-grow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isActive ? "flex-grow-[7]" : "flex-grow"
      } min-w-[70px]`}
      onClick={onClick}
    >
      <div className="absolute inset-0 ">
        <Image
          src={game.image}
          alt={game.title}
          fill
          className={`object-cover object-center transition duration-300 ${
            isActive ? "brightness-100" : "brightness-50"
          }`}
          sizes="(max-width: 820px) 100vw, 820px"
          placeholder="blur"
          blurDataURL={game.image.blurDataURL || game.image.src}
        />
      </div>

      <div
        className={`absolute left-2.5 right-2.5 bottom-5 flex items-center transition-all duration-300 z-10 ${
          isActive ? "bottom-5 top-auto inset-5" : ""
        }`}
      >
        <div
          className={`min-w-[50px] max-w-[50px] h-[50px] border rounded-full flex justify-center items-center overflow-hidden transition-all duration-300 ${
            isActive ? "border-teal-300" : "border-white"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`stroke-white transition-colors duration-300 ${
              isActive ? "stroke-teal-300" : ""
            }`}
          >
            <line x1="6" x2="10" y1="11" y2="11" />
            <line x1="8" x2="8" y1="9" y2="13" />
            <line x1="15" x2="15.01" y1="12" y2="12" />
            <line x1="18" x2="18.01" y1="10" y2="10" />
            <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
          </svg>
        </div>
        <h3
          className={`ml-2 whitespace-pre transition-all duration-300 ${
            isActive
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-full"
          }`}
        >
          {game.title}
        </h3>
      </div>

      <div className="absolute left-0 right-0 bottom-0 h-[100px] z-0 bg-gradient-to-b from-transparent to-black/70" />
    </div>
  );
};

const Stories = ({ games }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="h-fit w-full py-16 bg-gray-200 text-white flex justify-center items-center font-sans">
      <div className="w-full h-[calc(100vh/2)] flex gap-2.5 mx-[50px]">
        {games.map((game, index) => (
          <GameCard
            key={index}
            game={game}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Stories;
