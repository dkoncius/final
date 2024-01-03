import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import FormPage from './pages/Form';
import './App.css';

function App() {
  return (
    <>
       <Router>
        <nav>
          <Link to="/">Home Page</Link>
          <Link to="/form">Form Page</Link>
        </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
