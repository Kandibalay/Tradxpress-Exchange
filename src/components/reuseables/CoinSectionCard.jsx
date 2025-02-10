import React from 'react'
import Decrease from "../../assets/icons/Group 99.png";
import Increase from "../../assets/icons/Group 101.png";

const CoinSectionCard = ({coin}) => {
  return (
  
    < div className='w-full flex py-5 lg:py-0 px-2 gap-5 border-b border-b-[#C5C0C0] lg:border-b-0 lg:border-r lg:border-r-[#C5C0C0] justify-between lg:justify-center text-[#292929] text-[14px]'>
            <div className='grid grid-cols-2 lg:grid-cols-1 justify-between w-[80%] lg:w-[50%] gap-10 md:gap-5'> 
                <h2>{coin.symbol}</h2>  
                <p className='text-start'>{coin.price_usd}</p>  
            </div>
            <div className='flex items-start justify-start'>
                <h3>{coin.percent_change_24h}</h3>
                <img src={coin.img} alt="" className='w-[20px]' />
            </div>

    </div>
    
  )
}

export default CoinSectionCard