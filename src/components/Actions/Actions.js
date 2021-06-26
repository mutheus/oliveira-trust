import { useContext } from 'react';
import FilterItem from '../FilterItem/FilterItem';
import { DashboardContext } from '../../contexts/DashboardContext';
import axios from 'axios';
import useSWR from 'swr';

import arrowDown from '../../images/arrow-down.svg';
import plus from '../../images/plus.svg';

import './Actions.css';

const fetcher = url => axios.get(url).then(res => res.data);

function Actions() {
  const { selectedOption, selecOption, isFiltersOpen, openFilters } = useContext(DashboardContext);
  const { data, error } = useSWR('https://my-json-server.typicode.com/mutheus/employees-fake-api/employees', fetcher);
  
  if (error) return <div className="error"><h2>Data not found</h2></div>
  if (!data) return <div className="loading"><h2>Loading...</h2></div>
  
  const filters = data.reduce((acc, curr) => {
    if (!acc.includes(curr.department)) {
      acc.push(curr.department);
    }
    
    return acc;
  }, ["All"]);
  
  return (
    <section className="employees">
      <h2>All employees</h2>
          
      <div>
        <button className="filter" onClick={openFilters}>
          <span>{selectedOption}</span>
          <img src={arrowDown} alt="Arrow down icon" />
        </button>
        
        <button>
          <img src={plus} alt="Plus icon" />
          Add employee
        </button>
      </div>
      { isFiltersOpen && (
        <div className="filters-dropdown">
          { filters.map((item, index) => {
            return (
              <FilterItem item={item} key={index} />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Actions;