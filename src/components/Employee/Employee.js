import employee from '../../images/employee.svg';
import trash from '../../images/trash.svg';

import './Employee.css';

function Employee({ item }) {
  return (
    <>
      <div className="employee__info">
        <img src={item.avatar} alt="Employee photo" />
        
        <div>
          <h3>{item.name}</h3>
          <div>{item.email}</div>
        </div>
      </div>
      <div className="employee__role">
        <span>{item.role}</span>
      </div>
      <div className="employee__time-in-job">
        <span>{item.timeInJob}</span>
      </div>
      <div className="employee__delete">
        <img src={trash} alt="Trash icon" />
      </div>
    </>
  );
}

export default Employee;