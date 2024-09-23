"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";
import heroImage1 from "../../../../public/herobg.png";
import heroImage2 from "../../../../public/herobg.png";
import heroImage3 from "../../../../public/herobg.png";
import QuoteForm from "./quote";

const images = [heroImage1, heroImage2, heroImage3];

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full h-[700px] flex justify-center items-center overflow-hidden z-0">
      <motion.div
        key={currentIndex}
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Background image */}
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="object-cover w-full h-full"
          priority
        />
      </motion.div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-10 md:px-20 text-white space-y-6 z-10">
        <p className="text-base md:text-2xl font-bold">
          We are waiting for you
        </p>
        <h1 className="text-4xl leading-tight md:text-7xl lg:text-8xl font-bold">
          Welcome To Sri
        </h1>
        <h1 className="text-4xl leading-tight md:text-7xl lg:text-8xl font-bold">
          Lanka
        </h1>
        <div className="flex flex-col">
          <Link
            href="/visit-sri-lanka"
            className="group flex items-center text-white text-lg font-medium space-x-4"
          >
            <PlayCircle className="w-8 h-8 group-hover:scale-105 transition-transform duration-300" />
            <span className="group-hover:underline">Visit Sri Lanka</span>
          </Link>
          {/* Underline animation */}
          <span className="relative block w-[40%] h-0.5 bg-white mt-1 group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-10 right-10 flex space-x-4 z-20">
        <ChevronLeft
          className="text-white text-4xl cursor-pointer"
          onClick={handlePrev}
        />
        <ChevronRight
          className="text-white text-4xl cursor-pointer"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default HeroSection;
