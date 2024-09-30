import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import { div } from "framer-motion/client";


interface TourCardProps {
  data: {
    image: string;
    title: string;
    duration: string;
    price: number;
    rating: number;
  };
}

const TourCard: React.FC<TourCardProps> = ({data}) => {
  return (
  <div className="flex justify-center ">
    <div className="relative w-[300px] h-[402px] max-md:w-auto max-md:h-[200px] rounded-lg overflow-hidden shadow-lg ">
      <Image src={data.image} alt={data.title} className="w-full h-full object-cover  " />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < data.rating ? "text-yellow-400 fill-current" : "text-gray-400"
              }`}
            />
          ))}
        </div>
        <h3 className="text-white font-bold text-lg max-md:text-sm">{data.title}</h3>
        <p className="text-white text-sm">{data.duration}</p>
        <p className="text-white font-semibold mt-2 max-md:text-sm" >From: ${data.price}</p>
      </div>
    </div>
    </div>
  );
};

export default TourCard;