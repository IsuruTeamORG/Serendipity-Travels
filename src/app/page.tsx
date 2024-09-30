import React from "react";

import NavBar from "./components/common/header";
import HeroSection from "./components/Hero/heroSection";

import Carosol from "./components/Hero/cardCarosal";
import Gallery from "../app/components/gallery";



import TourCardGrid from "./components/TourCardGrid"
import MoreDestinationCarosal from "./components/MoreDestinationCarosal"
import GoogleReviewCarousel from "./components/GoogleReviewCarosal";

import Banner from "./components/Banner";
import Footer from "./components/common/footer";


const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Carosol />
      <Gallery />

 
      <TourCardGrid/>
      <Banner/>
      <MoreDestinationCarosal/>
      <GoogleReviewCarousel/>
      <Footer/>
     

    

    </div>
  );
};

export default Home;
