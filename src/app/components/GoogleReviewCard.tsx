"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { GoogleReview } from "../data/TourCardDetails";
import { Star } from "lucide-react";

type GoogleReviewCardProps = {
  googleReview: GoogleReview;
};

const GoogleReviewCard: React.FC<GoogleReviewCardProps> = ({
  googleReview,
}) => (
  <>
    <div className="w-[343px] h-[260px] max-md:w-[250px] max-md:h-[200px] bg-[#F5F5F5] hover:bg-[#dddddd] duration-300 rounded-lg overflow-hidden shadow-lg">
      <div className="p-4 gap-5">
        <div className="flex items-center mb-2">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
            <Image
              src={googleReview.image}
              alt={googleReview.name}
              width={40}
              height={40}
              objectFit="cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 text-base max-md:text-sm">
              {googleReview.name}
            </h3>
            <p className="text-sm text-gray-500  max-md:text-sm">{googleReview.date}</p>
          </div>
        </div>
        <div className="flex mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              fill={i < googleReview.rating ? "#87CEEB" : "none"}
              stroke={i < googleReview.rating ? "#87CEEB" : "#CBD5E0"}
            />
          ))}
        </div>
        <p className="text-sm mb-4 ">{googleReview.description}</p>
      </div>
    </div>
  </>
);

type GoogleReviewCarouselProps = { 
  googleReviews: GoogleReview[];
};

const GoogleReviewCarousel: React.FC<GoogleReviewCarouselProps> = ({
  googleReviews,
}) => {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % googleReviews.length);
  };

  const prevSlide = () => {
    setStartIndex(
      (prevIndex) =>
        (prevIndex - 1 + googleReviews.length) % googleReviews.length
    );
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center mb-5">
      <div className="text-3xl font-bold leading-[20px] text-left text-[#004643] mb-4 font-playfair  max-md:text-xl max-md:mb-1">Excellent</div>
      <div className="text-2xl font-bold text-[#FFD700]  max-md:text-lg">5.2 Google Review</div>
      </div>
      

      <div className="relative">
        <div className="flex space-x-6 justify-center max-md:hidden ">
          {googleReviews
            .slice(startIndex, startIndex + 4)
            .map((googleReview, index) => (
              <GoogleReviewCard key={index} googleReview={googleReview} />
            ))}
        </div>

        {/* mobile view */}
        <div className="flex space-x-4 justify-center md:hidden  ">
          {googleReviews
            .slice(startIndex, startIndex + 1)
            .map((googleReview, index) => (
              <GoogleReviewCard key={index} googleReview={googleReview} />
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
