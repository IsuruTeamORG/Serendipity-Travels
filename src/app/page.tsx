import React from "react";

import NavBar from "./components/common/header";
import HeroSection from "./components/Hero/heroSection";
import QuoteForm from "./components/Hero/quote";
import Carosol from "./components/Hero/cardCarosal";
import Gallery from "../app/components/gallery";
import TourCardGrid from "./components/TourCardGrid";
import Footer from "./components/common/footer";
import GoogleReviewPage from "./components/Hero/googleCarosal";



const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <QuoteForm />
      <Carosol />
      <Gallery />
      <TourCardGrid />
      <GoogleReviewPage/>
      <Footer/>
    </div>
  );
};

export default Home;
