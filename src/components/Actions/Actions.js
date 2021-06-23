import arrowDown from '../../images/arrow-down.svg';
import plus from '../../images/plus.svg';

import './Actions.css';

function Actions() {
  return (
    <section className="employees">
      <h2>All employees</h2>
          
      <div>
        <button>
          Filter
          <img src={arrowDown} alt="Arrow down icon" />
        </button>
        
        <button>
          <img src={plus} alt="Plus icon" />
          Add employee
        </button>
      </div>
    </section>
  );
}

export default Actions;