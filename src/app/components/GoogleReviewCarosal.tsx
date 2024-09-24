import React from "react";
import GoogleReviewCarosal from "../components/GoogleReviewCard";
import { googleReview } from "../data/TourCardDetails";

export default function Home() {
  return (
    <div className="mt-[5%] mb-[10%] py-8">
      <GoogleReviewCarosal googleReviews={googleReview} />
    </div>
  );
}