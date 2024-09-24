"use client";
import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { GoogleReview } from "../../app/data/googleReview"; // Update with the correct path
import GoogleReviewCard from "../components/Hero/googleCard"; // Update with the correct path

type GoogleReviewCarouselProps = {
  reviews: GoogleReview[];
};

const GoogleReviewCarousel: React.FC<GoogleReviewCarouselProps> = ({
  reviews,
}) => {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % (reviews.length - 3));
  };

  const prevSlide = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length - 3) % (reviews.length - 3)
    );
  };

  return (
    <div className="container mx-auto px-4">
      <h2
        className="text-4xl font-bold leading-[63.98px] text-left text-[#004643] mb-4 font-playfair ml-20"
        style={{ fontFamily: "Playfair Display" }}
      >
        Google Reviews
      </h2>

      <div className="relative">
        <div className="flex space-x-4 justify-center">
          {reviews.slice(startIndex, startIndex + 4).map((review, index) => (
            <GoogleReviewCard key={index} review={review} />
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <ChevronLeftIcon size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <ChevronRightIcon size={24} />
        </button>
      </div>
    </div>
  );
};

export default GoogleReviewCarousel;
