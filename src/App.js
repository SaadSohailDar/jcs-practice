import { Header } from "./components/header";
import { Carousel } from "react-bootstrap";
import { Routes,Route } from "react-router-dom";


import Contact from "./routing/contact";
import Services from "./routing/services";
import Footer from "./footer";
import Hero from "./components/hero";
import Home from "./routing/home";
import HeroSection from "./components/hero";
import React from "react";
import About from "./routing/about";
import Disability from "./routing/disabillity";
import Privacy from "./routing/Privacy";
import CustomAccordion from "./components/customAccordion";

const App = () => {
  return(
  <>
    <Header />
    
    <div>
      
    </div>
    <Footer />
  </> 
  );
};

export default App;