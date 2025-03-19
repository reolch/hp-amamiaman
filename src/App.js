// App.js
import './Font.css';
import './App.css';
import './styles/global.css';

import {React} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';


// Pages
import StoreInformation from './pages/StoreInformationPage/StoreInformationPage';
import OurPassionPage from './pages/OurPassionPage/OurPassionPage';
import Snorkelling from './pages/SnorkellingPage/SnorkellingPage';
import SeaKayakPage from './pages/SeaKayakPage/SeakayakPage';
import GlassBoatPage from './pages/GlassBoatPage/GlassBoatPage';
import LodgingPage from './pages/LodgingPage/LodgingPage';
import ContactPage from './pages/ContactPage/ContactPage';
import HomePage from './pages/HomePage/HomePage';
import OtherFacilitiesPage from './pages/OtherFacilities/OtherFacilitiesPage';

function App() {
  return (
    <Router basename='/hp-amamiaman'>
      <div className='wrapper'>
        <Header />
          <Routes>
            <Route path="/access" element={<StoreInformation />} />
            <Route path="/passion" element={<OurPassionPage />} />
            <Route path="/snorkelling" element={<Snorkelling />} />
            <Route path="/seaKayak" element={<SeaKayakPage />} />
            <Route path="/glassboat" element={<GlassBoatPage />} />
            <Route path="/lodging" element={<LodgingPage />} />
            <Route path="/other" element={<OtherFacilitiesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
