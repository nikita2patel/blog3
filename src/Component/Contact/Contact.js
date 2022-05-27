import React from 'react'
import './Contact.css'
import Footer from '../Footer/Footer'


const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-1'>
        <div className='contact-2'>
          <h5>Get in touch</h5>
          <div className='contactme'>
            <label>Name</label><br></br>
            <input type="text"/><br></br>
            <label>Email</label><br></br>
            <input type="text"/><br></br>
            <label>Phone</label><br></br>
            <input type="text"/><br></br>
            <button className='btn'>Submit</button>
          </div>
          
        </div>
        <h1>fdsjj</h1>
   
      </div>
      <Footer/>
    
     
    </div>
  )
}

export default Contact
