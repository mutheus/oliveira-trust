import { createContext, useState } from 'react';

export const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('All');
  
  function openMenu() {
    setIsOpen(!isOpen);
  }
  
  function openFilters() {
    setIsFiltersOpen(!isFiltersOpen);
  }
  
  function selecOption(value) {
    setSelectedOption(value);
    setIsFiltersOpen(false);
  }
  
  return (
    <DashboardContext.Provider value={{
      isOpen,
      isFiltersOpen,
      selectedOption,
      openMenu,
      openFilters,
      selecOption
    }}>
      {children}
    </DashboardContext.Provider>
  );
}

export default DashboardProvider;