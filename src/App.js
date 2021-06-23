import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import About from './components/About';
import Services from './components/Services';
import Offers from './components/Offers';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <Navbar />
      <About />
      <Services />
      <Offers />
      <Footer />
    </div>
  );
}

export default App;