import { useState, useEffect } from 'react';

export default function withDataFetching(WrappedComponent) {
  return function WithDataFetchingComponent(props) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      async function fetchData() {
        try {
          setIsLoading(true);
          const res = await fetch(`http://localhost:3001/movies`);
          if (!res.ok)
            throw new Error('Failed to fetch data, try again later.');
          const data = await res.json();
          setData(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }

      fetchData();
    }, []);

    if (isLoading) return <p>Loading data...</p>;
    if (error) return <p>Something went wrong..</p>;

    return <WrappedComponent data={data} {...props} />;
  };
}
