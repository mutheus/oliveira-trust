import { useContext, useEffect } from 'react';
import logo from '../../logo.svg';
import hamburger from '../../images/hamburger.svg';
import notification from '../../images/notification.svg';
import close from '../../images/close.svg';
import { DashboardContext } from '../../contexts/DashboardContext';

import './Header.css';

function Header() {
  const { openMenu, isOpen } = useContext(DashboardContext);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  })
  
  return (
    <>
      <header className="app__header">
        <div className="nav">
          <button onClick={openMenu}>
            <img src={hamburger} alt="Hamburger icon" />
          </button>
          
          <div className="nav__wrapper">
            <a href="/">
              <img src={logo} className="nav__logo" alt="Oliveira Trust logo" />
            </a>
          
            <div>
              <button>
                <img src={notification} alt="Notifications icon" />
              </button>
              
              <button>
                <img className="nav__avatar" src="https://github.com/mutheus.png" alt="Profile avatar" />
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <nav className={`menu ${isOpen ? 'openMenu' : 'closeMenu'}`}>
        <div>
          <button onClick={openMenu}>
            <img src={close} alt="Hamburger icon" />
          </button>
          <a>Home</a>
          <a>Profile</a>
          <div className="submenu">
            <a>Real State</a>
            <a>Stock market</a>
          </div>
          <a>Products</a>
          <a>Settings</a>
        </div>
      </nav>
    </>
  );
}

export default Header;