import React from "react";

import Stats from "./HomeSection/Stats";
import Hero from "./HomeSection/Hero";
import HowWeWork from "./HomeSection/HowWeWork";
import StartNewJourney from "./HomeSection/StartNewJourney";

const Home = () => {
  return (
    <div>
      <Hero />

      {/* Stat section */}
      <Stats />

      {/*How scholarhub work */}
      <HowWeWork />

      {/* Ready to start new journey Section */}
      <StartNewJourney />
    </div>
  );
};

export default Home;
