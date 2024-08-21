import React from "react";

// Css
import "./App.css";

// Components
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import Team from "./components/Team/Team";
import About from "./components/About/About";
import Stats from "./components/Stats/Stats";
import Offer from "./components/Offer/Offer";
import Header from "./components/Header/Header";
import Choose from "./components/Choose/Choose";
import Gallery from "./components/Gallery/Gallery";
import Features from "./components/Features/Features";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Features />
      <Menu />
      <Choose />
      <Stats />
      <Gallery />
      <Offer />
      <Team />
    </>
  );
}

export default App;
