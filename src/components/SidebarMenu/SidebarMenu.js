import { useContext, useEffect } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { SidebarData } from '../SidebarData/SidebarData';
import { DashboardContext } from '../../contexts/DashboardContext';

import close from '../../images/close.svg';
import './SidebarMenu.css';

function SidebarMenu() {
  const { openMenu, isOpen } = useContext(DashboardContext);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  })
  
  return (
    <nav 
      className={`menu ${isOpen ? 'openMenu' : 'closeMenu'}`}>
      <div>
        <button onClick={openMenu}>
          <img src={close} alt="Close icon" />
        </button>
        { SidebarData.map((item, index) => {
          return <MenuItem item={item} key={index} />
        })}
      </div>
    </nav>
  );
}

export default SidebarMenu;