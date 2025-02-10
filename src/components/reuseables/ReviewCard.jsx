import React from 'react'
import Quote from '../../assets/Images/quote.png'

const ReviewCard = ({testimony}) => {
  return (
    <div>
        <div className='relative'>
            <div className='bg-[#7C20BF] pl-3 pr-7 py-14 flex items-start rounded-md'> 
                <img src={Quote} alt="" className='w-[30px]'/>
                <p className='text-center text-white text-[14px] mt-3'>
                    {testimony.review}
                </p>
            </div>
            <div className='w-0 h-0 border-l-[30px] border-l-transparent border-t-[50px] border-t-[#7C20BF] border-r-[30px] border-r-transparent absolute left-10 -bottom-5'>

            </div>
        </div>
        <div className='flex gap-5 items-center px-10 mt-10'>
            <span>
                <img src={testimony.image} alt="" className='w-[60px]'/>
            </span>
            <div className='flex flex-col'>
                <h3 className='font-bold text-[16px]'>{testimony.name}</h3>
                <p className='text-[14px]'>{testimony.location}</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard