import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Locations from './Locations';
import Team from './Team';
import Services from './Services';
import Gallery from './Gallery';
import FAQ from './FAQ';

function App() {
  return (
    <>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
