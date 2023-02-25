import React, { useState } from "react";

import Slider from "./Slider";
import Slide from "./Slide";

const slides = [
  {
    color: "#0F0E0C",
    title: "Shotoe Apps",
    description:
      "It's Our Entertainment Branch of Shobbr India Private Limited",
    picture: require("./assets/1.png"),
  },
  {
    color: "#ffffff",
    title: "Scriblane",
    description:
      "It's Our Blogging & News Branch of Shobbr India Private Limited",
    picture: require("./assets/2.png"),
  },
  {
    color: "#30BECE",
    title: "Future Ideas",
    description:
      "More products coming soon by Shobbr India Private Limited",
    picture: require("./assets/4.png"),
  },
  {
    color: "#F34816",
    title: "Future Ideas",
    description:
      "More products coming soon by Shobbr India Private Limited",
    picture: require("./assets/3.png"),
  },
  {
    color: "#F9D00B",
    title: "Future Ideas",
    description:
      "More products coming soon by Shobbr India Private Limited",
    picture: require("./assets/5.png"),
  },
];

export const assets = slides.map(({ picture }) => picture);

const LiquidSwipe = () => {
  const [index, setIndex] = useState(1);
  const prev = slides[index - 1];
  const next = slides[index + 1];
  return (
    <Slider
      key={index}
      index={index}
      setIndex={setIndex}
      prev={prev && <Slide slide={prev} />}
      next={next && <Slide slide={next} />}
    >
      <Slide slide={slides[index]!} />
    </Slider>
  );
};

export default LiquidSwipe;
