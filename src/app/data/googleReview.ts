import img1 from "../../../public/PackagesImg/Rectangle 13 (1).png";
import img2 from "../../../public/PackagesImg/Rectangle 13 (2).png";
import img3 from "../../../public/PackagesImg/Rectangle 13 (3).png";
import img4 from "../../../public/PackagesImg/Rectangle 13 (4).png";
import img5 from "../../../public/PackagesImg/Rectangle 13 (5).png";
import img6 from "../../../public/PackagesImg/Rectangle 13 (6).png";
import { StaticImageData } from "next/image";

export interface GoogleReview {
  name: string;
  image: StaticImageData;
  description: string;
  title: string;
  rating: number;
}

export const googleReviews: GoogleReview[] = [
  {
    name: "John Doe",
    image: img1,
    title: "Excellent Service",
    description:
      "The tour was amazing! Everything was well-organized and the guide was fantastic.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    image: img2,
    title: "Loved the Experience",
    description:
      "The views were breathtaking, and the team made sure we were comfortable throughout.",
    rating: 4,
  },
  {
    name: "Mark Johnson",
    image: img3,
    title: "Memorable Trip",
    description:
      "Great experience! The trip exceeded my expectations in every way.",
    rating: 5,
  },
  {
    name: "Sarah Lee",
    image: img4,
    title: "Good Value for Money",
    description:
      "The package was reasonably priced, and we got to see a lot of amazing places.",
    rating: 4,
  },
  {
    name: "David Wilson",
    image: img5,
    title: "Could Be Better",
    description:
      "The tour was okay, but there were some organizational issues.",
    rating: 3,
  },
  {
    name: "Emily Clark",
    image: img6,
    title: "Amazing Adventure",
    description:
      "The adventure was thrilling and fun! Highly recommend it to anyone looking for excitement.",
    rating: 5,
  },
];
