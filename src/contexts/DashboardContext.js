import { createContext, useState } from 'react';

export const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  function openMenu() {
    setIsOpen(!isOpen);
  }
  
  return (
    <DashboardContext.Provider value={{
      isOpen,
      openMenu
    }}>
      {children}
    </DashboardContext.Provider>
  );
}

export default DashboardProvider;