import { useContext } from 'react';
import { DashboardContext } from '../../contexts/DashboardContext';

import logo from '../../logo.svg';
import hamburger from '../../images/hamburger.svg';
import notification from '../../images/notification.svg';
import './Header.css';

function Header() {
  const { openMenu } = useContext(DashboardContext);
  
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
    </>
  );
}

export default Header;