import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Portfolio/Home';
import About from './Components/Portfolio/About';
import Resume from './Components/Portfolio/Resume';
import Contact from './Components/Portfolio/Contact';
import Certification from './Components/Portfolio/Certification';
import Projects from './Components/Portfolio/Projects';
function App () {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='resume' element={<Resume/>}/>
    <Route path='projects' element={<Projects/>}/>
    <Route path='certification' element={<Certification/>}/>
    <Route path='contact' element={<Contact/>}/>
  </Routes>
  </BrowserRouter>
}

export default App;