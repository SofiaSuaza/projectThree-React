import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import PropsPage from './pages/PropsPage';
import StatePage from './pages/StatePage';
import LifecyclePage from './pages/LifecyclePage';
import HooksPage from './pages/HooksPage';
import VirtualDomPage from './pages/VirtualDomPage';
import ReduxPage from './pages/ReduxPage';

function App() {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <Link to="/">Inicio</Link>
        <Link to="/props">Props</Link>
        <Link to="/state">State</Link>
        <Link to="/lifecycle">Ciclo de Vida</Link>
        <Link to="/hooks">Hooks</Link>
        <Link to="/virtual-dom">Virtual DOM</Link>
        <Link to="/redux">Redux</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/props" element={<PropsPage />} />
        <Route path="/state" element={<StatePage />} />
        <Route path="/lifecycle" element={<LifecyclePage />} />
        <Route path="/hooks" element={<HooksPage />} />
        <Route path="/virtual-dom" element={<VirtualDomPage />} />
        <Route path="/redux" element={<ReduxPage />} />
      </Routes>
    </div>
  );
}

export default App;
