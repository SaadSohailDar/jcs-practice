import React from "react";
import { Header } from "./components/header";
import About from "./routing/about";
import { Carousel } from "react-bootstrap";
import Hero from "./components/hero";
import Home from "./routing/home";
import HeroSection from "./components/hero";

const App = () => {
  return(
  <>
    {/* <Carousel /> */}
    <HeroSection />
  </> 
  );
};

export default App;