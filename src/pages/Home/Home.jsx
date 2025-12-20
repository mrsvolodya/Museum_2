import React, { useEffect } from 'react';
import LandingSection from '../../components/layout/MainLayout/LandingSection/LandingSection';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <LandingSection />
    </div>
  );
};

export default Home;
