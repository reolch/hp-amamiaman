import {React, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

import HeroSection from '../../components/Section/HeroSection/HeroSection';
import AboutSection from '../../components/Section/AboutSection/AboutSection';
import ServiceSection from '../../components/Section/ServiceSection/ServiceSection';
import AccessSection from '../../components/Section/AccessSection/AccessSection';
import NewsSection from '../../components/Section/NewsSection/NewsSection';

function HomePage() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <AccessSection />
        <NewsSection />
    </>
  );
}

export default HomePage;
