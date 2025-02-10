import React from 'react'
import Button from './reuseables/Button'
import { why } from '../Db'
import WhyCard from './reuseables/WhyCard'

const Why = () => {
  return (
    <div className='px-6 md:px-10 lg:px-14 pt-16 pb-7 flex flex-col items-center gap-8 bg-[#EDE9EF]'>
        <h2 className='text-[32px] text-center font-bold'>Why do people get involved with Cryptocurrencies?</h2>
        <Button content='See Less' bg='bg-transparent' py='py-2' px='px-8' textColor='text-[#7C20BE]' />
        <div className='grid grid-cols-1 lg:grid-cols-3  lg:h-[330px] gap-5 lg:gap-16 ' >
            {
                why.map(item => (
                    <div key={item.id} >
                        <WhyCard details={item}/>
                    </div>
                ))

            }
        </div>
    </div>
  )
}

export default Why