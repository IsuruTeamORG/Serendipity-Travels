import React from "react";
import Image from "next/image";
import { GoogleReview } from "../../data/googleReview"; // Update with the correct path

type GoogleReviewCardProps = {
  review: GoogleReview;
};

const GoogleReviewCard: React.FC<GoogleReviewCardProps> = ({ review }) => (
  <div className="relative w-64 h-80 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
    <Image
      src={review.image}
      alt={review.name}
      layout="fill"
      objectFit="cover"
    />
    <div className="absolute bottom-4 left-4 bg-white px-2 py-1 rounded-md">
      <span className="text-sm font-semibold">{review.name}</span>
      <span className="ml-1">{"⭐".repeat(review.rating)}</span>
    </div>
    <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded-md">
      <span className="text-sm">{review.title}</span>
    </div>
    <div className="absolute bottom-10 left-4 bg-white px-2 py-1 rounded-md">
      <p className="text-xs">{review.description}</p>
    </div>
  </div>
);

export default GoogleReviewCard;
