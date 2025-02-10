import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";

const Login = () => {
    const { register, 
        handleSubmit,
        reset,
        formState: { errors } } = useForm() 

    const [loading, setLoading]= useState(false)
    const [apiError, setApiError] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const handleInputChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value })
    }

    const onSubmit = (data) => {    
        console.log(data)
        navigate('/')
        reset()
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className='w-[90%] md:w-[50%] lg:w-[40%] mx-auto my-12 bg-[#EEEDEE] px-6 md:px-14 py-6 flex flex-col  gap-7 rounded-md justify-center'>
            <h1 className='font-medium text-[24px] text-center'>Welcome Back</h1>
            <input {...register("username", { required: "This field is required",
                maxLength: { value: 15, message: "Username cannot exceed 15 characters" } })} 
             type="text" placeholder="Username" className={`w-full bg-white ${errors.username ?'border border-red-500 outline outline-red-500': 'border-none outline-none'} px-5 py-2 rounded-sm text-[14px] `} />
            {errors.username && <p className='text-red-500 text-[12px] -mt-5 text-right'>{errors.username.message}</p>} 
            <div className='relative'>
            <input {...register("password", { required: "This field is required",
              pattern:{
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
              }})}
             type={showPassword? 'text'  : "password"} placeholder="Password" className={`w-full bg-white ${errors.password? 'border border-red-500 outline outline-red-500': 'border-none outline-none'} px-5 py-2 rounded-sm text-[14px] `} />
            <span onClick={togglePasswordVisibility} className='absolute right-5 top-3 cursor-pointer'>{showPassword? <BiShow className='text-[#7C20BF]'/> : <BiHide className='text-[#7C20BF]'/>}</span>
            </div>
            {errors.password && <p className='text-red-500 text-[14px] -mt-5 text-right'>{errors.password.message}</p>}
            <div className='flex justify-between w-full'>
                <div>
                    <input type="checkbox" id="rememberPassword" className='mr-2 text-[14px] cursor-pointer' />
                    <label htmlFor="rememberMe" className="text-[12px] -ml-1">Remember Password</label>
                </div>
                <div>
                    <a href="#" className='text-[12px] text-[#7C20BF] cursor-pointer'>Forgot Password?</a>
                </div>
            </div>
            <button type="submit" className='w-full bg-[#7C20BE] text-white px-5 py-2 rounded-sm text-[14px]'>Login</button>
            <p className='text-[14px] text-center'>New User? <NavLink to='/signup' className='text-[#7C20BF]'>Click here.</NavLink></p>
        </form>
    </div>
  )
}

export default Login