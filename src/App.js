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
import Services from './pages/Services';
import Cart from './components/Cart';

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
          <Route path = "/Services" element={<Services/>}/>
          <Route path = "/cart" element={<Cart/>}/>
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
        return 'SW-Home';
      case '/about':
        return 'SW-About';
      case '/contact':
        return 'SW-Contact';
      case '/pricing':
        return 'SW-Pricing';
      case '/cart':
        return 'SW-Cart';
      default:
        return 'SW';
    }
  };

  return (
    <Helmet>
      <title>{getPageTitle()}</title>
    </Helmet>
  );
}

export default App;