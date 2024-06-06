import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Errorpage from './pages/Errorpage';
import Pricing from './pages/pricing';
import Header from "./components/Header";
import Footer from './components/Footer';
import CustomizePackage from './pages/CustomizePackage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/index.html" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<Errorpage />} />
          <Route path = "/CustomizePackage/:pageValue" element={<CustomizePackage/>}/>
        </Routes>
        <TitleUpdater />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

function TitleUpdater() {
  const location = useLocation();

  const getPageTitle = () => {
    const path = location.pathname;
    switch (path) {
      case '/':
        return 'WebMuba-Home';
      case '/about':
        return 'WebMuba-About';
      case '/contact':
        return 'WebMuba-Contact';
      case '/pricing':
        return 'WebMuba-Pricing';
      default:
        return 'WebMuba';
    }
  };

  return (
    <Helmet>
      <title>{getPageTitle()}</title>
    </Helmet>
  );
}

export default App;