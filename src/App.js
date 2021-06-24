import { useContext } from 'react';
import Header from './components/Header/Header';
import Actions from './components/Actions/Actions';
import Employees from './components/Employees/Employees';
import DashboardProvider from './contexts/DashboardContext';

import './App.css';

function App() {
  return (
    <DashboardProvider>
      <Header />
      
      <section className="hero">
        <h1>Welcome back,<br /> mutheus</h1>
      </section>
       
      <Actions />
      
      <Employees />
    </DashboardProvider>
  );
}

export default App;
