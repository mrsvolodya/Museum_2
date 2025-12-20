import React from 'react';
import './Header.scss';
import '../../ui/LanguageSwitcher/LanguageSwitcher.scss';
import Menu from '../../../assets/icons/menu.svg';
import { useNavigate } from 'react-router-dom';
import BrendLogo from '../../../assets/icons/namu.svg';
import CloseIcon from '../../../assets/icons/close.svg';
import LanguageSwitcher from '../../ui/LanguageSwitcher/LanguageSwitcher';
import useScreenSize from '../../../hooks/useScreenSize';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const navigate = useNavigate();
  const screen = useScreenSize();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__content">
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

          {isMenuOpen ? (
            <div className="header__actions">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="header__btn header__btn--close"
              >
                <img
                  src={CloseIcon}
                  alt="Menu icon"
                  className="header__icon header__icon--close"
                />
              </button>
              <LanguageSwitcher />
            </div>
          ) : (
            <button
              onClick={toggleMenu}
              className="header__btn header__btn--menu"
            >
              <img src={Menu} alt="Menu icon" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
