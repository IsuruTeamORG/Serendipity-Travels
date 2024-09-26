"use client";

import React from "react";
import { useParams } from "next/navigation";
import { destinations, Destination } from "../../data/destinations";
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
        <NavBar />
        <Image
          src={destination.coverImg}
          alt={destination.name}
          objectFit="cover"
          className="brightness-75 w-full h-[951px]"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-[120px] font-bold mb-4 mt-[-15%]">
            {destination.name}
          </h1>
          <p className="text-xl text-black">
            {destination.province} | Established {destination.established}
          </p>
        </div>

        {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent" /> */}
        <div className="mt-[-15%]">
          <QuoteForm />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 mt-[15%]">
          <h2
            className=" flex justify-center text-4xl md:text-6xl font-bold mb-6 "
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
              className="object-cover w-[690px] h-[406px]"
            />
          </div>
          <div className="absolute left-[48%] top-[10%] z-20 ">
          <div className="w-[675px] h-[246px] text-6xl text-white leading-[130%]">
          Explore <br /> <span className="ml-[10%]  ">{destination.name}</span> <br />History & Adventure
              </div>
          </div>
          <div className="absolute left-[18%] top-[30%] z-30 ">
            <Image
              src={BackgroundImg2}
              alt="BackgroundImg"
              className="object-cover w-[406px] h-[502px]"
            />
            <div className="w-[413px] text-[40px] ml-[10%]">
              Sacred City Adventures: Explore Anuradhapura
              <div className="w-[811px] text-lg bg-white p-2">
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
              className="object-cover w-[484px] h-[674px]"
            />
          </div>
          <div className="flex justify-center mt-20 ml-[5%]">
            <Image
              src={BackgroundImg}
              alt="BackgroundImg"
              className="object-cover w-[1106px] h-[474px] "
            />
          </div>
        </div>
      </div>
      <div className="mt-[35%]">
        <Footer />
      </div>
    </div>
  );
};

export default DestinationView;

{
  /* <div className="relative py-[40%] ">
<div className="absolute left-[26%] top-[-15%] z-20 " ><Image src={BackgroundImg1} alt="BackgroundImg" className="object-cover w-[690px] h-[406px]"/></div>
<div className="absolute left-[20%] top-[30%] z-30 " ><Image src={BackgroundImg2} alt="BackgroundImg" className="object-cover w-[406px] h-[502px]"/></div>
<div className="absolute right-[20%] top-[30%] z-10 " ><Image src={BackgroundImg3} alt="BackgroundImg" className="object-cover w-[484px] h-[674px]"/></div>
<div className="absolute left-[40%] top-[10%]">
<Image src={BackgroundImg} alt="BackgroundImg" className="object-cover w-[1106px] h-[474px] "/>
</div>
</div>
</div>
<div className="mt-[45%]"><Footer /></div> */
}
