import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import JobDescription from './pages/JobDescription';
import ApplyNow from './pages/ApplyNow';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/job-description" element={<JobDescription />} />
        <Route path="/apply" element={<ApplyNow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
