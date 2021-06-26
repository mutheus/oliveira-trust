import { useContext } from 'react';
import { DashboardContext } from '../../contexts/DashboardContext';

function FilterItem({ item }) {
  const { selecOption } = useContext(DashboardContext);
  
  return (
    <div onClick={() => selecOption(item)}>{item}</div>
  );
}

export default FilterItem;