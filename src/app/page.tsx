import React from "react";
import NavBar from "../app/components/common/header";
import HeroSection from "./components/Hero/heroSection";
import QuoteForm from "./components/Hero/quote";
import Carosol from "./components/Hero/cardCarosal";
import Gallery from "../app/components/gallery";
import TourCardGrid from "./components/TourCardGrid"

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

    
    </div>
  );
};

export default Home;
