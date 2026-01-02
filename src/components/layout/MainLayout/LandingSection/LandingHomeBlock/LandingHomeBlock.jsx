import React from 'react';
import useScreenSize from '../../../../../hooks/useScreenSize';
import './LandingHomeBlock.scss';
import P from '../../../../ui/StyleBlocks/P/P';
import H from '../../../../ui/StyleBlocks/H/H';
import Button from '../../../../ui/Button/Button';

const LandingHomeBlock = () => {
  const screen = useScreenSize(2000);

  return (
    <section className="landing-home-block">
      <div className="landing-home-block__container">
        <div className="landing-home-block__content">
          <div className="landing-home-block__text">
            <P fsize="14px" lineHeight="140%">
              10 серпня - 10 листопада
            </P>

            <H size="h1" lineHeight="150%">
              Мистецтво ХІХ - ХХ ст.
            </H>

            <P>Внесок українських митців у світову культуру 19-20 ст.</P>
            <Button>Купити квиток</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHomeBlock;
