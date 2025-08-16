import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/photoGallery";
import Agent from "./components/Agent/Agent";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <Gallery />
      <Agent />
      <Services />
      <Contact />
      <Map />
      <Footer />
    </div>
  );
};

export default App;
