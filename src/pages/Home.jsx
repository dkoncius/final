import { useState, useEffect } from 'react';

function Home() {
  const [data, setData] = useState([]);
  const BASE_URL = "https://open-long-puck.glitch.me";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(BASE_URL);
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Home page</h1>
      <table>
        <thead>
        <tr>
          <th>Brand</th>
          <th>Model</th>
        </tr>
        </thead>
        <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.brand}</td>
            <td>{item.model}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  );
}

export default Home;
