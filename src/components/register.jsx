import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from './nav';

const Register=()=>{

const[username,setUsername]=useState('');

const[password,setPassword]=useState('');

const[email,setEmail]=useState('');


const handleSubmit =(e)=>{
  e.preventDefault();
  
  console.log("submited "+(username)+" "+(password)+" here")

  const user={
    username:username,
    password:password,
    email:email,
    
  };

  // send post req to spring boot

 axios.post('http://localhost:8080/api/register',user)
  .then(response =>{
    alert('Registation successful');
  }).catch(error =>{
    alert('error in registration');
  });

 
}

return(
  <div>
    <h2>Register</h2>
   
    <form onSubmit={handleSubmit}>
  <div>
<label>Username:</label>
<input type='text' value={username} onChange={e=>setUsername(e.target.value)}/>

  </div>
  <div>
    <label>password</label>
<input type='password' value={password} onChange={e =>setPassword(e.target.value)}/>

  </div>

  <div>
    <label>Email</label>
<input type='email' value={email} onChange={e =>setEmail(e.target.value)}/>

  </div>
  <button type='submit'>Register</button>


    </form>




  </div>
);



} ;
export default Register;