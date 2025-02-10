import React from 'react'
import OneIcon from '../assets/icons/emojione-monotone_keycap-1.svg'
import TwoIcon from '../assets/icons/emojione-monotone_keycap-2.svg'
import ThreeIcon from '../assets/icons/emojione-monotone_keycap-3.svg'
import step1 from '../assets/Images/Step1.png'
import step2 from '../assets/Images/step2.png'
import step3 from '../assets/Images/step3.png'

const Steps = () => {
  return (
    <div className='px-6 md:px-10 lg:px-14 pb-10 lg:pb-0 '>
        <div className='text-center my-7 flex flex-col gap-4'>
            <h2 className='text-[32px] font-bold'>Buy and Sell your Cryptocurrency in 3 simple steps</h2>
            <p className='w-[80%] lg:w-[60%] mx-auto text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est lectus faucibus et nunc id sollicitudin pretium nulla. Et nunc tempus mauris ullamcorper mauris, rhoncus sed magna. Eu consectetur nulla aliquam consectetur lectus. Rutrum feugiat et, tellus mattis donec et odio molestie amet.</p>
        </div>
        <div className='flex flex-col gap-16 lg:gap-0'>
            <div className='flex flex-col lg:flex-row gap-5 lg:gap-32 items-center'>
                <div className='flex flex-col lg:flex-row items-center lg:items-start gap-5 text-center lg:text-start'>
                    <span>
                    <img src={OneIcon} alt="1-icon" className='w-[30px] lg:w-full' />
                    </span>
                    <div className='flex flex-col'>
                        <h3 className='font-bold text-[20px] lg:text-[28px]'>Create a free Account</h3>
                        <p className='text-[14px] lg:text-[16px]'>Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our easy process to set up your profile.</p>
                    </div>
                </div>
                <div>
                    <img src={step1} alt="" className='w-[150px] lg:w-full' />
                </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-5 lg:gap-32 items-center'>
                <div className='flex flex-col lg:flex-row items-center lg:items-start gap-5 text-center lg:text-start order-1 lg:order-2'>
                    <span>
                    <img src={TwoIcon} alt="2-icon" className='w-[30px] lg:w-full' />
                    </span>
                    <div className='flex flex-col'>
                        <h3 className='font-bold text-[20px] lg:text-[28px]'>Deposit</h3>
                        <p className='text-[14px] lg:text-[16px]'>Choose your preferred deposit option like bank transfer, credit/debit card or send digital asset directly to your wallet for easy funding/withdrawal.</p>
                    </div>
                </div>
                <div className='order-2 lg:order-1'>
                    <img src={step2} alt="" className='w-[150px] lg:w-full'/>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-5 lg:gap-32 items-center'>
                <div className='flex flex-col lg:flex-row items-center lg:items-start gap-5 text-center lg:text-start'>
                    <span>
                    <img src={ThreeIcon} alt="3-icon" className='w-[30px] lg:w-full'/>
                    </span>
                    <div className='flex flex-col'>
                        <h3 className='font-bold text-[20px] lg:text-[28px]'>Buy/ Sell Crypto</h3>
                        <p className='text-[14px] lg:text-[16px]'>Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our easy process to set up your profile.</p>
                    </div>
                </div>
                <div>
                    <img src={step3} alt="" className='w-[150px] lg:w-full'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Steps