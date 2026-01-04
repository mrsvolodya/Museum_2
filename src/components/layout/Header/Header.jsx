import React from 'react';
import './Header.scss';
import '@components/ui/LanguageSwitcher/LanguageSwitcher.scss';
import { useNavigate } from 'react-router-dom';
import BrendLogo from '@assets/icons/namu.svg';
import LanguageSwitcher from '@components/ui/LanguageSwitcher/LanguageSwitcher';
import useScreenSize from '@hooks/useScreenSize';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const navigate = useNavigate();
  const screenSize = useScreenSize();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__content container">
        <div className="header__nav">
          <div className="header__brand">
            <a
              href="/"
              className="header__logo"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
              }}
            >
              <img alt="NAMU" src={BrendLogo} width={124} height={37} />
            </a>
          </div>
          <div className="header__actions">
            {isMenuOpen ? (
              <>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="header__btn header__btn--close"
                >
                  <span className="header__icon header__icon--close" />
                </button>
                {screenSize.width < 640 && <LanguageSwitcher />}
              </>
            ) : (
              <button
                onClick={toggleMenu}
                className="header__btn header__btn--menu"
              >
                <span className="header__icon header__icon--menu" />
              </button>
            )}
            {screenSize.width > 640 && <LanguageSwitcher />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
