import { useContext } from 'react';
import Header from './components/Header/Header';
import Actions from './components/Actions/Actions';
import EmployeesTable from './components/EmployeesTable/EmployeesTable';
import SidebarMenu from './components/SidebarMenu/SidebarMenu';
import DashboardProvider from './contexts/DashboardContext';

import './App.css';

function App() {
  return (
    <DashboardProvider>
      <div className="wrapper">
        <SidebarMenu />
        <div>
          <Header />
          <section className="hero">
            <h1>Welcome back,<br /> mutheus</h1>
          </section>
          <Actions />
          <EmployeesTable />
        </div>
      </div>
    </DashboardProvider>
  );
}

export default App;
