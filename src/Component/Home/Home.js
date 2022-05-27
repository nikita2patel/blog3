import React from 'react';
import './Home.css';
import Footer from '../Footer/Footer';

import { useNavigate, useParams } from 'react-router-dom';



const Home = () => {
 const navigate = useNavigate()
const coursesPage = () => {
    navigate('/Contact');
}
  return (
    <div>
    <div className='Home'>
        <div className='Home-1'>
            <div className='Home-2'>
            <h1>Hey, i'm <span>Nikita patel</span></h1>
            <p>I'am <span>React.js </span>developer</p>
            <p>Reach me on social media or by sending an email to <h6><span>nikitapatel2568@gmail.com </span></h6></p>
            <button  onClick={coursesPage}>Get in touch</button>
            </div>
            <div className='img'>
           <image src=' https://images.pexels.com/photos/4672726/pexels-photo-4672726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
           </div>
        </div>
      </div>
      <Footer/>
      </div>
  )
}

export default Home
