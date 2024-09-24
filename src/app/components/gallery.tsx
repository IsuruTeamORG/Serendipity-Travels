import React from "react";
import Image from "next/image";
import img1 from "../../../public/Gallery/Rectangle 15.svg";
import img2 from "../../../public/Gallery/Rectangle 16.svg";
import img3 from "../../../public/Gallery/Rectangle 17.svg";
import img4 from "../../../public/Gallery/Rectangle 18.svg";
import img5 from "../../../public/Gallery/Rectangle 19.svg";
import img6 from "../../../public/Gallery/Rectangle 20.svg";

const PhotoGallery: React.FC = () => {
  return (
    <div className=" mx-[15%]  p-4">
      <div  className="text-4xl font-bold leading-[63.98px] text-left text-[#004643] mb-4 font-playfair"
        style={{ fontFamily: "Playfair Display" }}>Gallery</div>

      <div className="grid grid-cols-3 gap-1 mt-10 ">
        <div className="grid relative overflow-hidden justify-end">
          <Image
            src={img1}
            alt="Img01"
            className="transition-transform duration-300 hover:scale-105 object-cover h-[670px] w-[405px]"
          />
        </div>

        <div className="grid gap-0 items-start ">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={img2}
              alt="Img02"
              className="transition-transform object-cover duration-300 hover:scale-105 h-[217px] w-[405px]"
            />
          </div>

          <div className=" overflow-hidden rounded-lg">
            <Image
              src={img6}
              alt="Img06"
              className="transition-transform object-cover duration-300 hover:scale-105 h-[207px] w-[405px] overflow-hidden rounded-lg"
            />
          </div>

          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={img4}
              alt="Img04"
              className="transition-transform object-cover duration-300 hover:scale-105 h-[207px] w-[405px]"
            />
          </div>
        </div>

        <div className="grid justify-end gap-1">
          <div className="overflow-hidden rounded-lg  ">
            <Image
              src={img3}
              alt="Img03"
              className="transition-transform object-cover duration-300 hover:scale-105 h-[342px] w-[462px] "
            />
          </div>

          <div className="overflow-hidden rounded-lg">
            <Image
              src={img5}
              alt="Img05"
              className="transition-transform object-cover duration-300 hover:scale-105  h-[342px] w-[462px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
