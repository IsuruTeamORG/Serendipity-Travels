import GoogleReviewCarousel from "../GoogleReviewCarousel ";
import { googleReviews } from "../../data/googleReview"; // Import the data

export default function GoogleReviewPage() {
  return (
    <div>
      <GoogleReviewCarousel reviews={googleReviews} />
    </div>
  );
}
