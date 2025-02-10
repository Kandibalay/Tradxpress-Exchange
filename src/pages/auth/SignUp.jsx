import React, { useState } from 'react'
import Individual from '../../components/Individual'
import Business from '../../components/Business'
import { Link } from 'react-router-dom'


const SignUp = () => {
const [active, setActive] = useState("individual")

const handleSetActive = (tab) => {
  setActive(tab)
}

  return (
    <div>
    <div className='w-[90%] md:w-[60%] lg:w-[40%] bg-[#EEEDEE] mx-auto my-12 py-5 px-5 md:px-10 text-center '>
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <h1 className=' text-[28px] md:text-[32px]'>Welcome</h1>
            <div className="bg-[#E4E4E4] w-full rounded-full flex justify-center items-center mb-6">
                <button
                onClick={() => handleSetActive("individual")}
                className={`${
                    active === "individual" ? "bg-white outline-none" : ""
                } rounded-full w-full py-2  font-semibold ease transition-all duration-200`}
                >
                Individual
                </button>
                <button
                onClick={() => handleSetActive("business")}
                className={`${
                    active === "business" ? "bg-white outline-none" : ""
                } rounded-full w-full py-2  font-semibold ease transition-all duration-200`}
                > 
                Business
                </button>
            </div>
    </div>
    {active === "individual" ? <Individual/> : null} 
    {active === "business" ? <Business/> : null }
  <div className='flex gap-2  justify-center'>
        <p className='text-[12px] mt-6 text-center'>
                        Already have an account?  <Link to='/login' className='text-[#7C20BF]'>Click here.</Link>
        </p>
  </div>
     
    </div>
    </div>
    
  )
}

export default SignUp