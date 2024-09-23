import React from "react";
import Image from "next/image";
import img1 from "../../../public/Rectangle 15.svg";
import img2 from "../../../public/Rectangle 16.svg";
import img3 from "../../../public/Rectangle 17.svg";
import img4 from "../../../public/Rectangle 18.svg";
import img5 from "../../../public/Rectangle 19.svg";
import img6 from "../../../public/Rectangle 20.svg";





const PhotoGallery: React.FC = () => {
  return (
    <div className=" mx-[5%] p-4">
      <div className="text-5xl">Gallery</div>

      <div className="grid grid-cols-3 gap-1 mt-10">

        <div className="relative overflow-hidden">
          <Image
            src={img1}
            alt="Img01"
            layout="responsive"
            className="transition-transform duration-300 hover:scale-110 object-cover h-[655px] w-[405px]"
          />
        </div>

        <div className="grid gap-1">
        <div className="relative overflow-hidden rounded-lg gap-4">
          <Image
            src={img2}
            alt="Img02"
            layout="responsive"
            className="transition-transform duration-300 hover:scale-110 h-[207px] w-[405px]"
          />
        </div>

       
        <div className=" overflow-hidden rounded-lg">
          <Image
            src={img6}
            alt="Img06"
            layout="responsive"
            className="transition-transform duration-300 hover:scale-110 h-[207px] w-[405px] overflow-hidden rounded-lg"
          />
        </div>

        <div className="relative overflow-hidden rounded-lg">
          <Image
            src={img4}
            alt="Img04"
            layout="responsive"
            className="transition-transform duration-300 hover:scale-110 h-[207px] w-[405px]"
          />
        </div>
        </div>

   
        <div className="grid gap-1">
        <div className="overflow-hidden rounded-lg">
          <Image
            src={img3}
            alt="Img03"
            layout="responsive"
            className="transition-transform duration-300 hover:scale-110 h-[342px] w-[462px]"
          />
        </div>

        <div className="overflow-hidden rounded-lg">
          <Image
            src={img5}
            alt="Img05"
            layout="responsive"
            className="transition-transform duration-300 hover:scale-110 h-[342px] w-[462px]"
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;