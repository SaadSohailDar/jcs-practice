import React from "react";
import ReactDOM from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./routing/about";
import Disability from "./routing/disabillity";
import Privacy from "./routing/Privacy";
import Contact from "./routing/contact";
import Services from "./routing/services";
import Footer from "./footer";
import Hero from "./components/hero";
import Home from "./routing/home";
import CustomAccordion from "./components/customAccordion";
import "./App.scss";
import { Routes,Route } from "react-router-dom";
import { Header } from "./components/header";
import Page from "./routing/page";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Home heading="tuti fruti" />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/about" element={<Page title="abit" description="rrrrrr"/>} />
        <Route path="/buta" element={<Page title="buta" description="bbbbbbbbb"/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/disability" element={< Disability />} >
          <Route index element={<CustomAccordion />} />
          <Route path=":id" element={<Home />} />        
        </Route>
      </Routes>
      <Footer />
    
    </BrowserRouter>
  </React.StrictMode>
);