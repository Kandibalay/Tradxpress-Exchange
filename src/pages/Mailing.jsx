import React, { useState, useEffect } from 'react'
import Mail from '../assets/Images/Rectangle 26.png'
import Individual from  '../components/Individual'
import Business from '../components/Business'
import { Link } from'react-router-dom'



const Mailing = () => {
    const [verify, setVerify] = useState({})
    useEffect(() => {
        const data = localStorage.getItem('formData')
        if(data){
            setVerify(JSON.parse(data))}
    },[])
   
  return (
    <div className='bg-[#FBF8FD] w-[90%] md:w-[60%] lg:w-[40%] mx-auto my-12 px-10 py-8 shadow-md flex flex-col gap-7 items-center justify-center' >
        <p className='text-[18px]'>You're Almost In!</p>
        <h3 className='font-semibold text-center'>Welcome {verify.fullname}</h3>
        <img src={Mail} alt="" className='w-[100px]' />
        <p className='text-center text-[14px]'>An activation link has been sent to {verify.email} Please click on the link to verify your email and activate your TradExpress account.</p>
        <button type="button" className='bg-[#7C20BF] text-white py-2 w-[60%] rounded-sm mt-8 mb-2'>Sign Up</button>
        <Link to='/login'> <p className='text-[14px] text-center'>Already have an account? <span className='text-purple-500'>Click here.</span></p></Link>

    </div>
  )
}

export default Mailing
