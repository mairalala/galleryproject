import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cobaya from './components/Cobaya';
import Conejillodeindias from './components/Conejillodeindias';
import Cuiss from './components/Cuiss';
import Cuisbebes from './components/Cuisbebes';
import Cuy from './components/Cuy';
import Cuycafe from './components/Cuycafe';
import Cuychiquito from './components/Cuychiquito';
import Navigation from './components/Navigation';
import Cuyos from './components/Cuyos';
import Cuytierno from './components/Cuytierno';
import Ima8 from './components/Ima8';

function App() {
  return (
    <Router>
      <div className='Container'>
        <h1 id='title' className='title'>Galeria</h1>
      </div>
      <Routes>
        <Route path="/Cobaya" element={<Cobaya className="image-size" />} />
        <Route path="/Conejillodeindias" element={<Conejillodeindias />} />
        <Route path="/Cuiss" element={<Cuiss />} />
        <Route path="/Cuisbebes" element={<Cuisbebes />} />
        <Route path="/Cuy" element={<Cuy />} />
        <Route path="/Cuycafe" element={<Cuycafe />} />
        <Route path="/Cuychiquito" element={<Cuychiquito />} />
        <Route path="/Cuyos" element={<Cuyos />} />
        <Route path="/Cuytierno" element={<Cuytierno />} />
        <Route path="/Ima8" element={<Ima8 />} />
      </Routes>
      <Navigation />
    </Router>
  );
}

export default App;
