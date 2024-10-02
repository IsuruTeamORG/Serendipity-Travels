import React from "react";
import Image from "next/image";
import BannerImage from "../../../public/BannerImage.png";

const Banner: React.FC = () => {
  return (
    <div className="relative w-full h-[700px] max-md:h-[500px] my-[5%]">
      <Image
        src={BannerImage}
        alt="BannerImage"
        objectFit="cover"
        className="object-cover w-full h-full "
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start mx-14 md:px-20 max-md:mx-10 text-white space-y-6 z-10" >
        <p className="text-2xl font-bold text-[#FFD700]">Are You Ready ?</p>
        <h1 className="text-[65px] max-md:text-xl leading-tight font-bold">
          All Set to Explore Sri Lanka with
        </h1>
        <h1 className="text-[65px] max-md:text-xl leading-tight font-bold">
          Memorable Tours and Experiences
        </h1>
        <div className="flex gap-5 max-md:gap-2 ">
          <button className="relative inline-flex items-center justify-center overflow-hidden  transition-all rounded-lg text-base w-[174px] h-[60px] max-md:w-[100px] max-md:h-[50px] bg-[#FF6F61] hover:bg-[#ec5a4d] max-md:text-sm ">
            Plan Trip
          </button>

          <button className="w-[174px] h-[60px] max-md:w-[100px] max-md:h-[50px] border-2 border-[#FF6F61] border-opacity-50 rounded-lg font-inter text-base text-white hover:border-[#ec5a4d] max-md:text-sm">
            Contact uss
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
