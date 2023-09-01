// Desc: Main App component
import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Gallery } from './Pages/Gallery';
import { Events } from './Pages/Events';
import { Merch } from './Pages/Merch';
import Team from './Pages/Team';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </>
  );
}

export default App;
