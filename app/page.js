import About from "@/components/About";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="min-h-screen relative flex flex-col gap-20 lg:gap-32">
        <div className="fixed top-0 left-0 right-0 -z-20 h-full w-full">
          <BackgroundAnimation />
        </div>
        <Hero />
        <About />
        <Projects />
      </div>
    </>
  );
};

export default HomePage;
