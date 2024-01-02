"use client"
import React, { useState } from 'react'

const page = () => {
  const [password, setpassword] = useState(' ')
  const [passwordlength, setpasswordlength] = useState(12)

   const passwordgenerator = ()=>{
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()';
    var newpassword = '';
    for (let i = 0;i < passwordlength; i++){
      const passindex = Math.floor(Math.random()*characters.length);
      newpassword += characters.charAt(passindex);
    }
    
    setpassword(newpassword);
   }
   
  return (
    <>
    <div className='justify-item-center'>
      <div className='text-white bg-slate-500 text-center px-4 py-6 text-2xl'>
      <p>Sudeep's Password Generator</p>
    </div>
    <div className='text-white bg-slate-500 text-center px-4 py-6 text-2xl'>
      <label>  Password Length:  </label>
      <input className='text-black'
      type='number'
      value={passwordlength}
      onChange={(e) => setpasswordlength(e.target.value)}
      />
    </div>
    <div className='text-white bg-slate-500 text-center px-4 py-6 text-xl'>
      <button onClick={passwordgenerator} className='bg-slate-300 py-2 px-4'>Generate password </button>
    </div>
    
    <div className='text-white bg-slate-500 text-center px-4 py-6 text-2xl'>
      <strong>Password:</strong> {password}
    </div>
    </div>
    
    

    </>
  )
}

export default page

