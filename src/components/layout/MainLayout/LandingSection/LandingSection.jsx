import React from 'react';
import MainLayout from '../MainLayout';
import LandingHomeBlock from './LandingHomeBlock/LandingHomeBlock';

const LandingSection = () => {
  return (
    <MainLayout>
      <LandingHomeBlock />

      {/* <div className="Landing-section-wrapper"></div> */}
    </MainLayout>
  );
};

export default LandingSection;
