import React from "react";
import Navbar from "../components/CommonComponents/Navbar";
import Footer from "../components/CommonComponents/Footer";
import HeroSection from "../components/HomepageComponents/HeroSection";
import AboutPreview from "../components/HomepageComponents/AboutPreview";
import ProgramsSection from "../components/HomepageComponents/TechPrograms";
import VolunteerCTA from "../components/HomepageComponents/VolunteerCTA";
import SupportBanner from "../components/HomepageComponents/SupportBanner";
import SuccessStory from "../components/HomepageComponents/SuccessStory";
import VolunteerTeam from "../components/HomepageComponents/VolunteerTeam";
import ImpactStats from "../components/HomepageComponents/ImpactStats";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutPreview />
      <ProgramsSection />
      <VolunteerCTA />
      <SupportBanner />
      <SuccessStory />
      <VolunteerTeam />
      <ImpactStats />
      <Footer />
    </>
  );
};

export default Home;
