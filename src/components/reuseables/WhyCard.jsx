import React from 'react'

const WhyCard = ({details}) => {
  return (
    <div className='flex flex-col items-center text-center gap-5 bg-white py-8 px-5 w-full' >
        <span className='w-[100px]'>
        <img src={details.image} alt="" className=''/>
        </span>
        <h3 className='font-bold'>{details.title}</h3>
        <p className='text-[12px] w-80%'>{details.desc}</p>
    </div>
  )
}

export default WhyCard