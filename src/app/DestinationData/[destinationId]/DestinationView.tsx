"use client";

import React from "react";
import { useParams } from "next/navigation";
import { destinations } from "../../data/destinations";
import Image from "next/image";
import NavBar from "../../components/common/header";
import Footer from "../../components/common/footer";
import QuoteForm from "../../components/Hero/quote";
import BackgroundImg from "../../../../public/Destinations/Background.png";
import BackgroundImg1 from "../../../../public/Destinations/Rectangle 366.png";
import BackgroundImg2 from "../../../../public/Destinations/Rectangle 367.png";
import BackgroundImg3 from "../../../../public/Destinations/Rectangle 368.png";
import Link from "next/link";

interface DestinationViewProps {
  destinations: any;
}

const DestinationView: React.FC<DestinationViewProps> = () => {
  const params = useParams();
  const destinationId = params.destinationId;

  // Ensure destinationId is a single string
  if (Array.isArray(destinationId)) {
    return <div>Error: Invalid destination ID</div>;
  }

  const destination = destinations.find(
    (d) => d.id.toString() === destinationId
  );

  if (!destination) {
    return <div>Destination not found</div>;
  }

  return (
    <div>
      <div className="  ">
        {/* <NavBar /> */}
        <div className="relative">
      <div className="  relative">
        <Image
          src={destination.coverImg}
          alt={destination.name}
          objectFit="cover"
          className="brightness-75 w-full h-[951px] max-md:h-[300px] max-lg:h-[500px]"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-white z-20 w-full">
        <h1 className="text-7xl lg:text-[120px] max-lg:text-4xl font-bold mb-4 text-center">
          {destination.name}
        </h1>
        <p className="text-base md:text-xl text-center">
          {destination.province} | Established {destination.established}
        </p>
      </div>
      <div className="mt-8 md:mt-[-15%] relative z-30">
        {/* <QuoteForm /> */}
      </div>
    </div>

        <div className="max-w-7xl mx-auto px-4 py-12 mt-[15%] max-lg:mt-0 max-lg:py-0 ">
          <h2
            className=" flex justify-center text-6xl font-bold mb-6 max-md:text-2xl max-md:mb-0"
            style={{ fontFamily: "Playfair Display" }}
          >
            Best Of {destination.name}
          </h2>
        </div>
        <div className="relative ">
          <div className="absolute left-[32%] top-[-15%] z-20 ">
            <Image
              src={BackgroundImg1}
              alt="BackgroundImg"
              className="object-cover w-[690px] h-[406px] max-md:size-[100%]"
            />
          </div>
          <div className="absolute left-[48%] top-[10%] z-20 max-md:left-[35%]">
          <div className="w-[675px] h-[246px] text-6xl text-white leading-[130%] max-md:text-3xl max-md:w-[60px]">
          Explore <br /> <span className="ml-[10%] max-md:ml-0 ">{destination.name}</span> <br />History & Adventure
              </div>
          </div>
          <div className="absolute left-[18%] top-[30%] z-30 ">
            <Image
              src={BackgroundImg2}
              alt="BackgroundImg"
              className="object-cover w-[406px] h-[502px] max-md:size-[50%]"
            />
            <div className="w-[413px] max-md:w-[250px] text-[40px] ml-[10%] max-md:ml-0 max-md:text-2xl ">
              Sacred City Adventures: Explore Anuradhapura
              <div className="w-[811px] text-lg bg-white p-2 max-md:w-[260px] max-md:text-sm">
                We specialize in cultural tours and mild trekking experiences in
                the historic city of Anuradhapura. With global customers and
                trusted partners, we offer flexible, personalized itineraries to
                suit every traveler’s needs. Whether you're exploring ancient
                temples or trekking up Mihintale, we ensure a memorable journey.
                Check out the best package for you
              </div>
              <Link href='#' className="text-[#FF6F61] underline text-lg mt-[5%] p-2">Learn more</Link>
            </div>
          </div>

          <div className="absolute right-[25%] top-[55%] z-10 ">
            <Image
              src={BackgroundImg3}
              alt="BackgroundImg"
              className="object-cover w-[484px] h-[674px]  max-md:size-[50%]"
            />
          </div>
          <div className="flex justify-center mt-20 ml-[5%]">
            <Image
              src={BackgroundImg}
              alt="BackgroundImg"
              className="object-cover w-[1106px] h-[474px] max-md:size-[100%]"
            />
          </div>
        </div>
      </div>
      <div className="mt-[35%]">
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default DestinationView;


