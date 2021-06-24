import employee from '../../images/employee.svg';
import trash from '../../images/trash.svg';

import './Employees.css'

function Employees() {
  return (
    <div className="employees-table">
      <div>
        <strong>Name</strong>
      </div>
      <div>
        <strong>Role</strong>
      </div>
      <div>
        <strong>Time in Job</strong>
      </div>
      <div></div>
      
      <div className="employee__info">
        <img src={employee} alt="Employee photo" />
        
        <div>
          <h3>Ed Smith</h3>
          <div>esmithsmithsmith@email.com</div>
        </div>
      </div>
      <div className="employee__role">
        <span>UI Designer</span>
      </div>
      <div className="employee__time-in-job">
        <span>1yr</span>
      </div>
      <div className="employee__delete">
        <img src={trash} alt="Trash icon" />
      </div>
      <div className="employee__info">
        <img src={employee} alt="Employee photo" />
        
        <div>
          <h3>John Doe</h3>
          <div>john.doe@email.com</div>
        </div>
      </div>
      <div className="employee__role">
        <span>Manager</span>
      </div>
      <div className="employee__time-in-job">
        <span>4yr</span>
      </div>
      <div className="employee__delete">
        <img src={trash} alt="Trash icon" />
      </div>
      <div className="employee__info">
        <img src={employee} alt="Employee photo" />
        
        <div>
          <h3>Anna Weit</h3>
          <div>aweit@email.com</div>
        </div>
      </div>
      <div className="employee__role">
        <span>Designer</span>
      </div>
      <div className="employee__time-in-job">
        <span>9mo</span>
      </div>
      <div className="employee__delete">
        <img src={trash} alt="Trash icon" />
      </div>
    </div>
  );
}

export default Employees;