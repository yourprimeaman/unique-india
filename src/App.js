import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
