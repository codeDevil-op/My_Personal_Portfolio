import { Outlet } from 'react-router-dom'
import './app.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import Aside from './components/Aside'
import Navbar from './components/Navbar'
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { MdOutlineLocationCity } from "react-icons/md";
import { GiMailbox } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useState } from 'react';
function App() {

  const [contactBar,setContactBar] = useState(false)

  const contactInfo = (
    <ul>
    <li className="contact-item">
    <div className="icon-box">
        <GiMailbox/>
    </div>
    <div className="contact-info" onClick = {()=>setContactBar(false)}>
    <p className="contact-title">Email</p>
    <Link 
    to='mailto:rahmanishfaq146@gmail.com' target="_blank" className="contact-link">
    rahmanishfaq146@gmail.com
    </Link>
    </div> 
    </li>

    <li className="contact-item">
    <div className="icon-box">
        <FaPhoneAlt/>
    </div>
    <div className="contact-info" onClick = {()=>setContactBar(false)}>
    <p className="contact-title">Phone</p>
    <Link 
    to='https://wa.me/+923111370146' target="_blank" className="contact-link">
    +92 311-1370146
    </Link>
    </div> 
    </li>

    <li className="contact-item">
    <div className="icon-box">
        <FaLinkedinIn/>
    </div>
    <div className="contact-info" onClick = {()=>setContactBar(false)}>
    <p className="contact-title">Linkedin</p>
    <Link 
    to='https://www.linkedin.com/in/abdur-rahman-a017b8228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ' target="_blank" className="contact-link">
    My Linkedin
    </Link>
    </div> 
    </li>

    <li className="contact-item">
    <div className="icon-box">
        <ImGithub/>
    </div>
    <div className="contact-info" onClick = {()=>setContactBar(false)}>
    <p className="contact-title">Github</p>
    <Link 
    to='https://github.com/codeDevil-op' target="_blank" className="contact-link">
    codeToHelp
    </Link>
    </div> 
    </li>

    <li className="contact-item">
    <div className="icon-box">
        <MdOutlineLocationCity/>
    </div>
    <div className="contact-info" onClick = {()=>setContactBar(false)}>
    <p className="contact-title">Location</p>
    <Link 
    to='https://maps.app.goo.gl/fe72GnwDjuiLYoP86' target="_blank" className="contact-link">
    Jahanian, Pakistan
    </Link>
    </div> 
    </li>
  </ul>
  )

  return (
    <>
      <Aside contactInfo={contactInfo} setContactBar={setContactBar} contactBar={contactBar}/>
      <ReactTooltip id='tool' place='top'/>
      <ToastContainer/>
      <div className='main-content'>
      <Navbar/>
      {contactBar?
        <div className='contactBar'>
      {contactInfo}
      </div>:''
      }
      
      <section style={{
        scrollBehavior: 'smooth'
      }}>
        <Outlet/>
      </section>

      </div>
    </>
  )
}

export default App
