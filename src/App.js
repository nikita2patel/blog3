import './App.css';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
// import Footer from './Component/Footer/Footer';
import Contact from './Component/Contact/Contact';
import Skil from './Component/Skil/Skil';
import Login from './Component/Login/Login';
import Error from './Component/Error/Error';
import React from 'react';
import Skills from './Component/Dashbord/Dashbord/Skills';
import Tabel from './Component/Dashbord/Dashbord/Tabel/Tabel'




function App() {
  const item=  localStorage.getItem("token")
  console.log('item',item)
  
  return (
    <div>
     
  <BrowserRouter>
 


  { item ?
  <>
   <Link to="/Skills">Skills</Link>
   <Link to="/Tabel">Tabel</Link>
  <Routes>
    <Route path='/Skills' element={<Skills/>}/>
    <Route path='/Tabel' element={<Tabel/>}/>
  </Routes>
  </>
 :
 <>
  <div className='header'>
    <ul>
   <Link to="/">Home</Link>
  <Link to="/About">About</Link>
  <Link to="/Contact">Contact</Link>
  <Link to="/Skill">Skil</Link>
  </ul>
  </div>
  <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/About" element={<About/>}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='/Skill' element={<Skil/>}/>
       <Route path='/Login' element={<Login/>}/> 
       <Route path='*' element={<Error/>}/>
        
     </Routes>
 </>
  }
 
        </BrowserRouter>
     


    </div>
  );
}

export default App;
