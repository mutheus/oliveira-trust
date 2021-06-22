import logo from './logo.svg';
import hamburger from './images/hamburger.svg'
import notifs from './images/notifs.svg'
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <nav className="nav">
          <button className="nav__btn">
            <img src={hamburger} alt="Hamburger icon" />
          </button>
          
          <div className="nav__wrapper">
            <a href="/">
              <img src={logo} className="nav__logo" alt="Oliveira Trust logo" />
            </a>
          
            <div>
              <button className="nav__notifs">
                <img src={notifs} alt="Notifications icon" />
              </button>
              
              <button>
                <img className="nav__avatar" src="https://github.com/mutheus.png" alt="Profile avatar" />
              </button>
            </div>
          </div>
        </nav>
      </header>
      <main className="container">
        <div className="container__hero">
          <h1>Welcome back,<br /> mutheus</h1>
        </div>
      </main>
    </div>
  );
}

export default App;
