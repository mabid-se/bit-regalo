import React, { useEffect, useState } from "react";

import Header from "@/src/components/header/Header";
import HeroSection from "@/src/components/homeHeroSection";

const HomeOne = () => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return null;
  }

  return (
    <>
      <Header />
      <HeroSection />
    </>
  );
};

export default HomeOne;
