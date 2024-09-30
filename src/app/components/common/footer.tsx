import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
 import LOGO from "../../../../public/logo.png";
import FooterShape from "../../../../public/rectShape.png";
import FooterBImage from "../../../../public/FooterBImage.png";
import Vector from "../../../../public/Vector.svg";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../ContactForm";

const Footer = () => {
  return (
    <footer className="bg-[#333333]  py-8 mt-[10%]">
      <div className="relative container mx-auto flex flex-col items-center text-black">
        {/* FooterShape Image */}
        <Image
          src={FooterShape}
          alt="Footer shape"
          className="w-full mt-[-3%]"
        />

        {/* FooterBImage positioned absolutely on top of FooterShape */}
        <div className="absolute inset-0 flex justify-center items-center">
          <Image
            src={FooterBImage}
            alt="Footer background Logo"
            className="lg:w-[500px] lg:h-[500px] md:w-[350px] md:h-[350px] w-[110px] h-[110px] "
          />
          <div className="absolute grid grid-cols-2 gap-[10%] space-x-[50%]">
            <div className="p-4 md:p-10 lg:p-20 space-y-6 md:space-y-8 lg:space-y-12">
              <h1
                className="text-2xl md:text-4xl font-bold leading-tight text-left"
                style={{
                  fontFamily: '"SF Pro Display", sans-serif',
                  lineHeight: "1.2",
                }}
              >
                Serendipity Travels
              </h1>
              <span
                className="text-lg md:text-xl font-medium text-left"
                style={{
                  fontFamily: "Podkova, serif",
                  lineHeight: "1.5",
                }}
              >
                Sri Lanka: A Paradise Awaits
              </span>
              <p className="font-montserrat text-base md:text-lg font-semibold leading-tight text-left">
                Regístrate y disfruta de todas las ventajas que te ofrecemos,
                introduce tus platos y empieza la transformación de tu
                restaurante:
              </p>
            </div>

            <div className="lg:absolute lg:inset-0 lg:mt-[-25%] hidden md:block ">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="mb-4 md:mb-0">
            <Image
              src={LOGO}
              alt="Serendipity Travels Logo"
              width={80}
              height={80}
            />
          </div>
        </Link>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-4 md:mb-0 text-white">
          <a
            href="https://facebook.com"
            className="bg-white text-gray-900 p-5 rounded-full"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            className="bg-white text-gray-900 p-5 rounded-full"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            className="bg-white text-gray-900 p-5 rounded-full"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Copyright and Credits */}
      <div className="text-center text-sm mt-4 text-white opacity-70 leading-10">
        <p>© 2020 Serendipity Travels. All rights reserved.</p>
        <p>Design by Poornima Kavishka</p>
      </div>
    </footer>
  );
};

export default Footer;
