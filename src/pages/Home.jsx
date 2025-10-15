import React from "react";
import Navbar from "../components/CommonComponents/Navbar";
import HeroSection from "../components/HomepageComponents/HeroSection";
import AboutPreview from "../components/HomepageComponents/AboutPreview";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutPreview />
    </>
  );
};

export default Home;
