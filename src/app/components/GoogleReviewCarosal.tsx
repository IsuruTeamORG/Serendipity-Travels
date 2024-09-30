import React from "react";
import GoogleReviewCarosal from "../components/GoogleReviewCard";
import { googleReview } from "../data/TourCardDetails";

export default function Home() {
  return (
    <div className="mt-[5%] mb-[10%] py-8 max-md:mt-0 max-md:py-4 max-md:mb-0">
      <GoogleReviewCarosal googleReviews={googleReview} />
    </div>
  );
}