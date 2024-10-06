import React, { useState } from 'react';
import '../../src/style.css';
import { useNavigate } from 'react-router-dom';

function Register() {
 const[username,setusername]=useState("")
 const[email,setemail]=useState("")
 const[password,setpassword]=useState("")

 let navigate=useNavigate()
 function valid(){
  window.sessionStorage.setItem("username",username)
  window.sessionStorage.setItem("password",password)
  window.sessionStorage.setItem("email",email)
  navigate('/Login')
 }

 

  return (
    <div className="register-form-container">
  <h2 className="register-title">Register</h2>
  <form onSubmit={valid}>
    <div className="input-wrapper">
      <label className="input-label">Username</label>
      <input 
        type="text" 
        name="username" 
        className="input-field"
        value={username} 
        onChange={(e)=>{setusername(e.target.value)}} 
        required 
      />
    </div>
    <div className="input-wrapper">
      <label className="input-label">Email</label>
      <input 
        type="email" 
        name="email" 
        className="input-field"
        value={email} 
        onChange={(e)=>{setemail(e.target.value)}} 
        required 
      />
    </div>
    <div className="input-wrapper">
      <label className="input-label">Password</label>
      <input 
        type="password" 
        name="password" 
        className="input-field"
        value={password} 
        onChange={(e)=>{setpassword(e.target.value)}} 
        required 
      />
    </div>
    <button type="submit" className="primary-button">Register</button>
  </form>
</div>
  );
}

export default Register;

