import employee from '../../images/employee.svg';
import trash from '../../images/trash.svg';

import './Employees.css'

function Employees() {
  return (
    <section className="employees-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Time in Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="employee__info">
              <img src={employee} alt="Employee photo" />
              
              <div>
                <h3>Ed Smith</h3>
                <span>esmith@email.com</span>
              </div>
            </td>
            <td>
              <span className="employee__role">UI Designer</span>
            </td>
            <td>
              <span className="employee__time-in-job">1yr</span>
            </td>
            <td>
              <span>
                <img src={trash} alt="Trash icon" />
              </span>
            </td>
          </tr>
          <tr>
            <td className="employee__info">
              <img src={employee} alt="Employee photo" />
              
              <div>
                <h3>John Doe</h3>
                <span>john.doe@email.com</span>
              </div>
            </td>
            <td>
              <span className="employee__role">Manager</span>
            </td>
            <td>
              <span className="employee__time-in-job">4yr</span>
            </td>
            <td>
              <span>
                <img src={trash} alt="Trash icon" />
              </span>
            </td>
          </tr>
          <tr>
            <td className="employee__info">
              <img src={employee} alt="Employee photo" />
              
              <div>
                <h3>Anna Weit</h3>
                <span>aweit@email.com</span>
              </div>
            </td>
            <td>
              <span className="employee__role">Designer</span>
            </td>
            <td>
              <span className="employee__time-in-job">9mo</span>
            </td>
            <td>
              <span>
                <img src={trash} alt="Trash icon" />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Employees;