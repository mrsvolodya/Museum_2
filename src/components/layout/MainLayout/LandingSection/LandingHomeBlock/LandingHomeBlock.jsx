import React from 'react';
import './LandingHomeBlock.scss';
import P from '@components/ui/StyleBlocks/P/P';
import H from '@components/ui/StyleBlocks/H/H';
import Button from '@components/ui/Button/Button';
import ResponsiveImage from '@components/ui/ResponsiveImage/ResponsiveImage';
import HeroImageMobile from '@assets/HeroImages/HeroImageMobile.png';
import HeroImageTablet from '@assets/HeroImages/HeroImageTablet.png';
import HeroImageDesktop from '@assets/HeroImages/HeroImageDesktop.png';

const LandingHomeBlock = () => {
  return (
    <section className="landing-home-block">
      <div className="landing-home-block__container container">
        <div className="landing-home-block__content">
          <div className="landing-home-block__info">
            <P
              textAlign="start"
              fsize="14px"
              lineHeight="140%"
              className="landing-home-block__period"
            >
              10 серпня - 10 листопада
            </P>

            <H
              size="h1"
              lineHeight="150%"
              textAlign="start"
              className="landing-home-block__heading"
            >
              Мистецтво ХІХ - ХХ ст.
            </H>

            <P textAlign="start" className="landing-home-block__description">
              Внесок українських митців у світову культуру 19-20 ст.
            </P>

            <div className="landing-home-block__actions">
              <Button>Купити квиток</Button>
            </div>

            <div className="landing-home-block__date">
              <P
                textAlign="start"
                fsize="14px"
                lineHeight="125%"
                fontWeight="700"
                className="landing-home-block__date-text"
              >
                10.08 - 10.10
              </P>
              <div className="landing-home-block__date-line"></div>
            </div>
          </div>

          <div className="landing-home-block__img-container">
            <ResponsiveImage
              mobile={HeroImageMobile}
              tablet={HeroImageTablet}
              desktop={HeroImageDesktop}
              alt="Мистецтво ХІХ - ХХ ст."
              className="landing-home-block__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHomeBlock;
