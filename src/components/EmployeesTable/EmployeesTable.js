import { useContext, useState} from 'react';
import Employee from '../Employee/Employee';
import Page from '../Page/Page';
import { DashboardContext } from '../../contexts/DashboardContext';
import axios from 'axios';
import useSWR from 'swr';

import './EmployeesTable.css';

const fetcher = url => axios.get(url).then(res => res.data);

function EmployeesTable() {
  const [pageIndex, setPageIndex] = useState(1);
  const { selectedOption } = useContext(DashboardContext);
  const { data, error } = useSWR('https://my-json-server.typicode.com/mutheus/employees-fake-api/employees', fetcher);
  
  if (error) return <div className="error"><h2>Data not found</h2></div>
  if (!data) return <div className="loading"><h2>Loading...</h2></div>
  
  const filtered = data.filter((item) => item.department === selectedOption);
  
  return (
    <>
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
        
        { filtered && (
          filtered.map((item) => {
            return <Employee item={item} key={item.id} />;
          })
        )}
        
        { selectedOption === "All" && <Page index={pageIndex} />}
      </div>
    </>
  );
}

export default EmployeesTable;