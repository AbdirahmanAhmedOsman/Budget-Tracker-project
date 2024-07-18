import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../firebase'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loader from './Loader'



function SingUpForm() {

//create email & password fields state
const [email , setEmail] = useState('');
const [password , setPassword] = useState('');

const navigate = useNavigate();

//Loader state 
const [loading ,setLoading] = useState(false);

//handle function submit
const handleSubmit = async (e) =>{
  e.preventDefault();
  
  //condition email and password
  if(!email || !password) {
    toast.error('Pleace enter both email && password!')
    return;
  }

  //start loading 
  setLoading(true);
  try{
     const n = await createUserWithEmailAndPassword(auth , email , password);
     console.log(`itus ${n}`)
    toast.success('user has been created');
    navigate('/')
  }catch(error){
    toast.error('usr already exist');
  }finally{
    setEmail('');
    setPassword('');
    //stop loading
    setLoading(false);
  }
}

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div  className="w-full max-w-md mx-auto bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div  className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
         placeholder='Email'
        className="mt-1 block w-full p-2 border border-gray-300 rounded"

        />
        </div>

        <div className="mb-4">
        <label className="block text-gray-700">Password</label>
        <input type='password' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'
        className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
        </div>
      <button type='submit' className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
       {loading ? <Loader /> :'Sign Up'} 
        </button>
      </form>
      </div>
    </div>
  )
}

export default SingUpForm