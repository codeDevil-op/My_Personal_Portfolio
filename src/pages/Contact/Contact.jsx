import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Contact = () => {

  const [formData,setFormData] = useState({
    fullname:'',
    email:'',
    message:'',
  })
  const handleChange = (e)=>{
    let name = e.target.name
    let value = e.target.value
    setFormData({...formData,[name]:value})
  }
  const handleSubmit = async(e)=>{
    e.preventDefault()
    

    const {fullname,email,message} = formData
  if(!fullname || !email || !message){
    alert('Please fill all fields')
  }else{
    const formData = new FormData(e.target);

    formData.append("access_key", "c8cd15ce-887a-424c-bcf4-311c41bec673");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (data.success) {
    toast.success('Sent successfully',{
      theme:'dark',
    })
      // event.target.reset();
    } else {
     toast.error(data.message,{
      theme:'light'
     })
    }
    
  }
  setFormData({
    fullname:'',
    email:'',
    message:''
  })
  }
  return (
    <section className='contact'>
    <header>
      <he className="h2 article-title">Contact</he>
    </header>
    <section className='mapbox'>
      <figure>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55261.69942355594!2d71.77794026183568!3d30.040982683555043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b5c5c416adfab%3A0xb1c9fa735a869f72!2sJahanian%2C%20Khanewal%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1725194111768!5m2!1sen!2s" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </figure>
    </section>
    <section className='contact-form'>
      <h3 className="h3">Contact Me</h3>
      <form onSubmit={handleSubmit} className='form'>
      <div className="input-wrapper">
        <input type="text" name='fullname' value={formData.fullname} onChange={handleChange} placeholder='Full Name'className='form-input'/>
        <input type="text" name='email' value={formData.email} onChange={handleChange} placeholder='Email Address' className='form-input'/>
      </div>
      <textarea name="message" value={formData.message} onChange={handleChange} className='form-input' placeholder='Type Here...' style={{
        resize:'none'
      }}></textarea>
      <button className='form-btn' type='submit'>Send Message</button>
      </form>
    </section>
    </section>
  )
}

export default Contact