
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cobaya from './components/Cobaya';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Cobaya" element={Cobaya} />
      </Routes>
    </Router>
  );
}

export default App;
