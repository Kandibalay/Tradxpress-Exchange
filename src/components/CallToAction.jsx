import React from 'react'
import Button from './reuseables/Button'
import google from '../assets/Images/Google.png'
import apple from '../assets/Images/Apple.png'
import { Link } from 'react-router-dom'
const CallToAction = () => {
  return (
    <div className='pt-10 pb-16 lg:px-14 bg-[#EDE9EF]'>
        <div className='flex flex-col items-center gap-2 w-[80%] lg:w-[50%] mx-auto' >
            <p className='text-center'>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
            <h3 className='font-bold text-[24px] mb-5 text-center'>Create your account for free and start trading today!</h3>
           <div className='flex flex-col gap-3'>
           <Link to='/signup'><Button content='Get Started' bg='bg-[#7C20BF]' py='py-3' width='w-full' textColor='text-white'/></Link> 
            <div className='flex flex-col md:flex-row gap-3 w-full'>
                <img src={apple} alt="connect to apple store"/>
                <img src={google} alt="connect to playstore"/>
            </div>
           </div>
        </div>
    </div>
  )
}

export default CallToAction