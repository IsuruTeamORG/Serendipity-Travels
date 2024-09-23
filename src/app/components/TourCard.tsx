import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";

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
    <div className="relative w-64 rounded-lg overflow-hidden shadow-lg">
      <Image src={data.image} alt={data.title} className="w-[300px] h-[402px] object-cover" />
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
        <h3 className="text-white font-bold text-lg">{data.title}</h3>
        <p className="text-white text-sm">{data.duration}</p>
        <p className="text-white font-semibold mt-2">From: ${data.price}</p>
      </div>
    </div>
  );
};

export default TourCard;