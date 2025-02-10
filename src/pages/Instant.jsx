import React from 'react'
import { useState } from 'react'
import Buy from '../components/Buy'
import Sell from '../components/Sell'


const Instant = () => {
    const [active, setActive] = useState('buy')

    const handleSetActive = (tab) => {
        setActive(tab)
    }
  return (
    <div >
        <div className='w-[90%] md:w-[60%] lg:w-[40%] bg-[#EEEDEE] mx-auto my-12 py-5 px-5 md:px-10  flex flex-col gap-8 '>
            <h1 className='text-[24px] md:text-[28px] text-center font-semibold'>Buy/Sell Instantly</h1>
            <div className="flex gap-4 shadow-sm w-full rounded-full mb-4 text-[14px]">
                <button onClick={() => handleSetActive('buy')} className={` font-semibold ${active === 'buy'? "bg-white outline-none" : ""} rounded-full w-full py-2  font-semibold ease transition-all duration-200`}>Buy</button>
                <button onClick={() => handleSetActive('sell')} className={`font-semibold ${active ==='sell'? "bg-white outline-none" : ""} rounded-full w-full py-2  font-semibold ease transition-all duration-200`}>Sell</button>
            </div>
            {active === 'buy' ? <Buy/> : null}
            {active ==='sell'? <Sell/> : null}
        </div> 
    </div>
  )
}

export default Instant