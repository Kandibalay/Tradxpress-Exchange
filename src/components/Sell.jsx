import React from 'react'
import { useForm } from 'react-hook-form'

const Sell = () => {
        const { register, handleSubmit, reset, formState: { errors } } = useForm()
            
        const onSubmit = (data) => {
            console.log(data)
            reset()
        }
  return (
    <div>
         <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8'>
                <div className='flex flex-col w-full gap-2'>
                    <label htmlFor='crypto' className='font-bold text-[14px]'>Coin to Sell</label>
                    <select id='crypto' name='crypto' className='bg-white rounded-sm px-3 py-2 text-[14px] outline-none'>
                        <option value='BTC'>Bitcoin (BTC)</option>
                        <option value='ETH'>Ethereum (ETH)</option>
                        <option value='LTC'>Litecoin (LTC)</option>
                        <option value='XRP'>Ripple (XRP)</option>
                        <option value='XRP'>Tether (USDT)</option>
                    </select>
                </div>
                <div className='flex flex-col w-full gap-2'>
                    <label htmlFor='currency' className='font-bold text-[14px]'>Currency</label>
                    <select id='currency' name='currency' className='bg-white rounded-sm px-3 py-2 text-[14px] outline-none' >
                        <option value='BTC'>Naira (NGN)</option>
                        <option value='ETH'>Dollar (USD)</option>
                        <option value='LTC'>Pounds (GBP)</option>
                    </select>
                </div>
                <div className='flex flex-col w-full gap-2'>
                    <label htmlFor="amount" className='font-bold text-[14px] '>Amount</label>
                    <div className='flex text-[14px]'>
                    <span className='bg-white rounded-sm px-3 py-2 text-[14px] outline-none '>NGN</span>
                    <input {...register('amount', {required: 'Enter the amount to buy',
                        maxLength: {value: 10, message: 'Amount must not exceed 10 digits'},
                    })}
                    type="number" id="amount" name="amount" placeholder="Enter amount" className={`w-full rounded-r-sm border-l border-l-[#707070] ${errors.amount ? 'outline outline-red-500 border border-red-500' : 'outline-none'} bg-white py-2 px-3 outline-none`}/>
                    </div>
                {errors.amount && <p className='text-red-500 text-[12px] mx-0 text-right'>{errors.amount.message}</p>}
                </div>
                <button type="submit" className='w-full bg-[#7C20BF] text-white py-2 mt-2 mb-7'>Continue</button>
            </form>
    </div>
  )
}

export default Sell