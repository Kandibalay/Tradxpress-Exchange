import React from 'react'
import Button from './reuseables/Button'
import AppleLogo from '../assets/Images/apple-store.png'
import GoogleLogo from '../assets/Images/google-play.png'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div id='hero' className='px-6 md:px-10 lg:px-14 pt-16 pb-20 flex flex-col gap-5 w-full'>
        <h1 className='text-white text-[32px] text-center md:text-start w-[80%] md:w-[570px] leading-[1.2] mx-auto md:mx-0'  >
        Buy, sell and manage your Crypto on TradExpress.
        </h1>
        <p className='text-white font-thin w-[300px] mx-auto md:mx-0 md:w-[400px] text-center md:text-left'>
        Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with NGN.
        </p>
        <div className='flex flex-col gap-5 w-[200px] md:w-[330px] mx-auto md:mx-0'>
            <Link to='/signup'><Button content='Get Started' bg='bg-white' textColor='text-[#7C20BE]' width='w-full' py='py-3'/></Link>
            <div className='grid grid-cols-2 items-center md:flex-row gap-2 md:gap-2 w-full justify-center md:justify-start mx-auto md:mx-0'>
                <img src={AppleLogo} alt="apple-store" />
                <img src={GoogleLogo} alt="google-store"/>
            </div>
        </div>
      
    </div>
  )
}

export default Hero