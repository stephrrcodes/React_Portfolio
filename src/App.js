import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact";
import Resume from "./components/Resume"
import Footer from "./components/Footer";
import './App.css';

export default function App() {
  const [navState, setNavState] = useState('About');
  const renderPage = () => {
    if (navState === 'About') {
      return <About />
    } else if (navState === 'Portfolio') {
      return <Portfolio />
    } else if (navState === 'Resume') {
      return <Resume />
    } else if (navState === 'Contact') {
      return <Contact />
    }
  };
  const handleNavState = (page) => setNavState(page);
  return(
    <div className="App">
        <Header navState={navState} handleNavState={handleNavState}/>
        {renderPage()}        
        <Footer /> 
    </div>
  );
}