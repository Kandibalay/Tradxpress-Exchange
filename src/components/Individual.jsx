import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Individual = () => {
    const { register, 
        handleSubmit,
        reset,
        formState: { errors } } = useForm();

        const navigate = useNavigate(); 

    const onSubmit = (data) => {
        console.log(data);
        localStorage.setItem('formData', JSON.stringify(data));
        navigate('/mailing', { replace: true }); 
        
        reset();

    }


        
  return (
    <div>
             <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
            <input {...register("username", { required: "This field is required",
                pattern: {
                    value: /^[a-zA-Z0-9]{6,}$/,
                  message: "Username must be at least 6 characters long and contain only letters and numbers",
                }})}
            type="text" placeholder="Username" className={`w-full bg-white ${errors.username ?'border border-red-500 outline outline-red-500': 'border-none outline-none'} px-5 py-2 rounded-sm text-[14px] `} />
            {errors.username && <p className='text-red-500 text-[12px] mx-0 text-right'>{errors.username.message}</p>}
            <input {...register("fullname", { required: "This field is required", 
                pattern: {
                    value: /^([a-zA-Zà-úÀ-Ú]{2,})+\s+([a-zA-Zà-úÀ-Ú\s]{2,})+$/, 
                  message: "Please enter a valid name",
                }})}
            type="text" placeholder="Full Name" className={`w-full bg-white ${errors.fullname ?'border border-red-500 outline outline-red-500': 'border-none outline-none'} px-5 py-2 rounded-sm text-[14px]`} />
            {errors.fullname && <p className='text-red-500 text-[12px] mx-0 text-right'>{errors.fullname.message}</p>}
            <input {...register("email", {
              required: "This field is requird",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
             type="email" placeholder="Email" className={`w-full bg-white ${errors.email ?'border border-red-500 outline outline-red-500': 'border-none outline-none'} px-5 py-2 rounded-sm text-[14px]`} />
            {errors.email && <p className='text-red-500 text-[12px] mx-0 text-right'>{errors.email.message}</p>}
            <input {...register('phonenumber', {required: 'This field is required',
                pattern: {
                  value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                  message: "Please enter a valid phone number",
                },
            })}
            type="number" placeholder="Phone Number" className={`w-full bg-white ${errors.phonenumber ?'border border-red-500 outline outline-red-500': 'border-none outline-none'} px-5 py-2 rounded-sm text-[14px]`}/>
            {errors.phonenumber && <p className='text-red-500 text-[12px] mx-0 text-right'>{errors.phonenumber.message}</p>}
            <input type="text" placeholder='Referral Code (optional)' className='w-full bg-white px-5 py-2 rounded-sm text-[14px] outline-none'/>
            <p className='text-[12px] text-center mx-auto w-[65%] mt-5'>
                By Clicking the Sign Up button below, you agree to Tradxpress <span className='text-[#7C20BF]'>Terms and service</span>
            </p>
            <button type="submit" className='bg-[#7C20BF] text-white py-2 w-full mt-2 text-[14px]'>Sign Up</button>
        </form>
    </div>
  )
}

export default Individual