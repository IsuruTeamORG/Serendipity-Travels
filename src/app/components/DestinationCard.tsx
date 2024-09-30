'use client'
import React from "react";
import Image from "next/image";

interface DestinationCardProps {
  data: {
    image: string;
    location: string;
    duration: string;
    price: number;
    rating: number;
  };
}

const DestinationCard: React.FC<DestinationCardProps> = ({data}) => {
  console.log(data)
  return (
    <div className="relative w-64 rounded-lg  shadow-lg">
      <Image src={data.image} alt='ggg' className="w-[300px] h-[402px]  object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
        <div className="flex items-center mb-2">
          {data.location}
          
        </div>
       
        
      </div>
    </div>
  );
};

export default DestinationCard;