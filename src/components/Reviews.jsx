import React from 'react'
import { review } from '../Db'
import ReviewCard from './reuseables/ReviewCard'

const Reviews = () => {
  return (
    <div className='px-6 md:px-10 lg:px-14 py-10'>
        <div>
            <h2 className='text-center mb-12 font-bold text-[24px]' >Customer’s Review</h2>
        </div>
        <div className=' grid grid-cols-1 lg:grid-cols-3 gap-10'>
            {review.map((rev) => (
                <div key={rev.id}>
                    <ReviewCard testimony={rev}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Reviews