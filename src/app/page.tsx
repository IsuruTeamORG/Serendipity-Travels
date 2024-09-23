import React from "react";
import NavBar from "../app/components/common/header"
import HeroSection from "./components/Hero/heroSection";
import QuoteForm from "./components/Hero/quote";
import Carosol from "./components/Hero/cardCarosal";


const Home: React.FC = () => {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <QuoteForm/>
      <Carosol/>
     
    </div>
  );
};

export default Home;
