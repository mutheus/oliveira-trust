import Header from './components/Header/Header';
import Actions from './components/Actions/Actions';
import Employees from './components/Employees/Employees';

import './App.css';

function App() {
  return (
    <>
      <Header />
      
      <section className="hero">
        <h1>Welcome back,<br /> mutheus</h1>
      </section>
       
      <Actions />
      
      <Employees />
    </>
  );
}

export default App;
