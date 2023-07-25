import React from "react";

import FluidAnimation from "../../animation/index";

import NorthernButton from "../NorthernButton";

import classes from "./styles.module.scss";
import MouseScroll from "../mouseScroll";
import Image from "next/image";
import logo from "../../../assets/img/core-img/logo.png";

const defaultConfig = {
  textureDownsample: 1,
  densityDissipation: 0.98,
  velocityDissipation: 0.99,
  pressureDissipation: 0.8,
  pressureIterations: 25,
  curl: 30,
  splatRadius: 0.005,
};

const HeroSection = () => {
  return (
    <div className={classes.heroSection}>
      <FluidAnimation config={defaultConfig} />
      <div className={classes.heroSectionContentWrapper}>
        <div className={classes.heroSectionContent}>
          <Image
            alt="logo"
            src={logo}
            style={{ width: 300, height: 300, marginBottom: 8 }}
          />

          {/* <h1 className="heroSectionHeading">BitRegalo</h1> */}
          <h3 className={classes.heroSectionSubheading}>
            Decentralize Everything
          </h3>
          <h3 className={classes.heroSectionSubheading}>Comming Soon</h3>
          {/* buy btrt */}
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://web13.co.nz/"
          >
            <div className={classes.heroSectionButtonRow}>
              <NorthernButton
                kind="white-outline"
                text={"Join Whit-list"}
                styles={{
                  marginRight: 16,
                }}
                onClick={() => {}}
              />
            </div>
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://web13.co.nz/public/login"
          >
            <div className={classes.heroSectionButtonRow}>
              <NorthernButton
                kind="white-outline"
                text={"Buy Btrt"}
                styles={{
                  marginRight: 16,
                }}
                onClick={() => {}}
              />
            </div>
          </a>
        </div>
      </div>
      <div className={classes.heroSectionScrollAnimationWrapper}>
        {/* <MouseScroll /> */}
      </div>
    </div>
  );
};

export default HeroSection;
