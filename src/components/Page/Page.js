import Employee from '../Employee/Employee';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = url => axios.get(url).then(res => res.data);

function Page({ index }) {
  const { data, error } = useSWR(`https://my-json-server.typicode.com/mutheus/pages-fake-api/pages/${index}`, fetcher);
  
  if (error) return <div className="error"><h2>Data not found</h2></div>
  if (!data) return <div className="loading"><h2>Loading...</h2></div>
  
  return (
    <>
      {
        data.data.map((item) => {
          return <Employee item={item} key={item.id} />;
        })
      }
    </>
  );
}

export default Page;