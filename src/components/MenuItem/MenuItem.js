import { useState } from 'react';

import './MenuItem.css';

function MenuItem({ item }) {
  const [subnav, setSubnav] = useState(false);
  
  function showSubnav() {
    setSubnav(!subnav);
  }
  
  return (
    <div>
      <div className="nav-item" onClick={item.subNav && showSubnav}>
        <img src={item.icon} />
        <a>{item.title}</a>
      </div>
      { subnav && item.subNav.map((item, index) => {
        return (
          <div key={index} className="subnav">
            <a>{item.title}</a>
          </div>
        )
      })}
    </div>
  );
}

export default MenuItem;