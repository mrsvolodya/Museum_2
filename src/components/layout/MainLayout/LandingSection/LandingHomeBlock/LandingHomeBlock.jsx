import React from 'react';
import useScreenSize from '../../../../../hooks/useScreenSize';
import './LandingHomeBlock.scss';

const LandingHomeBlock = () => {
  const screen = useScreenSize(2000);

  return (
    <section className="landing-home-block">
      <div className="landing-home-block__container">
        <div className="landing-home-block__content"></div>
      </div>
    </section>
  );
};

export default LandingHomeBlock;
