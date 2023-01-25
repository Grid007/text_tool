import './App.css'
import Navbar from './components/Navbar.jsx'
import Textutils from './components/Textutils.jsx'
import React,{useState} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


import Blogs from './components/Blogs.jsx'
import Contact from './components/Contact.jsx'


export default function App() {
  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#3e4368'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
    <BrowserRouter>
   <Navbar title="Obelisk" mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route path="/" element={<Textutils mode={mode} />} >
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
   
    </>
    
  );
}
