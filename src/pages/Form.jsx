import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


function Form() {
  const [data, setData] = useState([]);
  const [brand, setBrand] = useState(''); // State for brand input
  const [model, setModel] = useState(''); // State for model input
  const navigate = useNavigate(); // Create navigate function

  const BASE_URL = "https://open-long-puck.glitch.me";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(BASE_URL);
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ brand, model }),
      });
      
      const newEntry = await response.json();
      setData([...data, newEntry]); // Update local data with new entry
      alert("Success")
      navigate('/');
      
    } catch (error) {
      console.error('Error during POST request', error);
    }
  };

  return (
    <>
      <h1>Form page</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Brand" 
          required 
          value={brand} 
          onChange={(e) => setBrand(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Model" 
          required 
          value={model} 
          onChange={(e) => setModel(e.target.value)} 
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default Form;
