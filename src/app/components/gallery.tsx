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

   

    <div className="container mx-auto  p-4">



      <div  className="text-4xl font-bold leading-[63.98px] text-left text-[#004643] mb-4 font-playfair max-md:text-xl max-md:mb-0"
        style={{ fontFamily: "Playfair Display" }}>Gallery</div>


      <div className="grid grid-cols-3 gap-1 mt-10 max-md:mt-4">
        <div className="grid relative overflow-hidden justify-end">
          <Image
            src={img1}
            alt="Img01"
            className="transition-transform duration-300 hover:scale-105 object-cover w-full h-full"
          />
        </div>

        <div className="grid gap-1 items-start ">
          <div className="relative overflow-hidden rounded-lg ">
            <Image
              src={img2}
              alt="Img02"
              className="transition-transform object-cover duration-300 hover:scale-105 w-full h-full"
            />
          </div>

          <div className=" overflow-hidden rounded-lg">
            <Image
              src={img6}
              alt="Img06"
              className="transition-transform object-cover duration-300 hover:scale-105 w-full h-full overflow-hidden rounded-lg"
            />
          </div>

          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={img4}
              alt="Img04"
              className="transition-transform object-cover duration-300 hover:scale-105 w-full h-full"
            />
          </div>
        </div>

        <div className="grid justify-end gap-1">
          <div className="overflow-hidden rounded-lg   ">
            <Image
              src={img3}
              alt="Img03"
              className="transition-transform object-cover duration-300 hover:scale-105 w-full h-full "
            />
          </div>

          <div className="overflow-hidden rounded-lg">
            <Image
              src={img5}
              alt="Img05"
              className="transition-transform object-cover duration-300 hover:scale-105  h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
