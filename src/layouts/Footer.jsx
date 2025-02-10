import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <div className='bg-[#EDE9EF] grid  grid-cols-1 gap-10 text-center md:text-left md:gap-5 md:justify-evenly md:grid-cols-3 lg:grid-cols-5 px-6 md:px-10 lg:px-14 py-10'>
            <div>
                <h3 className='font-bold text-[16px] mb-2'>Products</h3>
                <ul className='text-[14px] flex flex-col gap-2'>
                    <li>Bitcoin</li>
                    <li>Alt</li>
                    <li>Fiat</li>
                    <li>Refill</li>
                    <li>P2P</li>
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-[16px] mb-2'>Learn</h3>
                <ul className='text-[14px] flex flex-col gap-2'>
                    <li>Blog</li>
                    <li>Help Center</li>
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-[16px] mb-2'>Contact</h3>
                <ul className='text-[14px] flex flex-col gap-2 mb-3'>
                    <li>Hello@tradexpress.com</li>
                    <li>Support@tradexpress.com</li>
                </ul>
                <ul className='text-[14px] flex gap-8 justify-center md:justify-start'>
                    <li><FaTwitter /></li>
                    <li><FaTelegram /></li>
                    <li><IoLogoWhatsapp /></li>
                    <li><FaFacebookF /></li>
                </ul>
            </div>
            <div>
                <ul>
                    <h3 className='font-bold text-[16px] mb-2'>Company</h3>
                    <ul className='text-[14px] flex flex-col gap-2'>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Rates</li>
                        <li>Mobile</li>
                    </ul>
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-[16px] mb-2'>Legal</h3>
                <ul className='text-[14px] flex flex-col gap-2'> 
                    <li>Privacy Policy</li>
                    <li>Anti-Money Laundering</li>
                    <li>Terms and conditions</li>
                </ul>
            </div>
        </div>
        <div className=''>
            <p className='text-[14px] w-[80%] md:w-full mx-auto text-center flex flex-col md:flex-row items-center justify-center'><span className='text-[20px]'>&copy; </span>2021 Tradexpress Technologies. All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer