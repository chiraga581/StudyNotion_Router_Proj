import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'



const LoginForm = ({setIsLoggedIn}) => {

    const [formData , setFormData] = useState( {
        email:"", password:""
    } )

    const [showPassword , setShowPassword] = useState(false);

    function changeHandler(event){
        setFormData((prevData) => ( {
                ...prevData,
                [event.target.name] : event.target.value
            })
        )
    }
    const navigate = useNavigate();
    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard")
    }
  return (
    <form onSubmit={submitHandler}
        className='flex flex-col w-full gap-y-4 mt-6'
    >

        <label className='w-full '>
            <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem] '>
                Email Address <sup className='text-pink-200'>*</sup>
            </p>
            <input 
                required
                type='email'
                value= {formData.email}
                onChange={changeHandler}
                placeholder='Enter Email ID'
                name='email'
                className=' bg-richblack-800 w-full rounded-[0.5rem] text-richblack-5 p-3 border-b border-richblack-700'
            />

        </label>

        <label className='w-full relative '>
            <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem] '>

                Password <sup className='text-pink-200'>*</sup>
            </p>
            <input 
                required
                type= {showPassword ? ("text") : ("password")}
                value= {formData.password}
                onChange={changeHandler}
                name='password'
                placeholder='Enter Password'
                className=' bg-richblack-800 w-full rounded-[0.5rem] text-richblack-5 p-3 border-b border-richblack-700'
            />

            <span
                className='absolute right-3 top-[38px] cursor-pointer'
                onClick={() => setShowPassword ( (prev) => !prev)}
            >

                {showPassword ? 

                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            
            </span>
            <Link to='#'>
                <p className='max-w-max text-xs mt-1 text-blue-100 ml-auto'>
                    Forgot Password
                </p>
            </Link>
        </label>
        <button className='w-full text-center bg-yellow-50 rounded-[8px] font-medium px-[12px] py-[8px] mt-6'>
            Sign In
        </button>

    </form>
  )
}

export default LoginForm