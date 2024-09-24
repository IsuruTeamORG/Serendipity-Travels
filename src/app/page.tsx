import React from "react";
import NavBar from "../app/components/common/header";
import HeroSection from "./components/Hero/heroSection";
import QuoteForm from "./components/Hero/quote";
import Carosol from "./components/Hero/cardCarosal";
import Gallery from "../app/components/gallery";
import TourCardGrid from "./components/TourCardGrid"
import MoreDestinationCarosal from "./components/MoreDestinationCarosal"
import GoogleReviewCarousel from "./components/GoogleReviewCarosal";

import Banner from "./components/Banner";

const Home: React.FC = () => {
  return (
    <div>
      page
      <NavBar />
      <HeroSection />
      <QuoteForm />
      <Carosol />
      <Gallery />
      <TourCardGrid/>
      <Banner/>
      <MoreDestinationCarosal/>
      <GoogleReviewCarousel/>
     

    
    </div>
  );
};

export default Home;
