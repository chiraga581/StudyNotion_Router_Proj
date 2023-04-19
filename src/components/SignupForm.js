import React, { useState } from 'react'
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai"
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'



const SignupForm = ({setIsLoggedIn}) => {

    const [formData , setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""  

    })

    const [showPassword , setShowPassword ] = useState(false)
    const [showConfirmPassword , setShowConfirmPassword ] = useState(false)

    const [accountType , setAccountType] = useState("student")

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
        if(formData.password != formData.confirmPassword){
            toast.error("Password Doesn't Matched");
        }
        else{
            setIsLoggedIn(true);
            toast.success("Account Created")
            navigate("/dashboard"); 
        }
        const accountData = {
            ...formData
        };

        // console.log("Printing Details")
        // console.log(accountData);
       
    }

  return (
    <div>
        
        {/* Student Instructor Tab */}
        <div className='flex bg-richblack-800 p-2 gap-x-4 my-6 rounded-full max-w-max'>
            <button 
                className={`${accountType === "student" ? 
                    "bg-richblack-900 text-richblack-5 py-2 px-3 rounded-full transition-all duration-200"
                    :
                    "bg-transparent text-richblack-200 "
                }`}
                onClick={() => setAccountType("student")}
            >
                Student
            </button>
            <button

                className={`${accountType === "instructor" ? 
                    "bg-richblack-900 text-richblack-5 py-2 px-3 rounded-full transition-all duration-200"
                    :
                    "bg-transparent text-richblack-200 "
                }`}

                onClick={() => setAccountType ("instructor")}
            >
                Instructor
            </button>
        </div>
        
        <form onSubmit={submitHandler}>
            
            {/* FIRST NAME AND LAST NAME  */}
            <div className='flex gap-x-4 mt-5'>
                <label className='w-full '>
                    <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem] '>
                        First Name <sup className='text-pink-200'>*</sup>
                    </p>
                    <input 
                        required
                        type='text'
                        name='firstName'
                        onChange={changeHandler}
                        placeholder='Enter First Name '
                        value={formData.firstName}
                        className=' bg-richblack-800 w-full rounded-[0.5rem] text-richblack-5 p-3 border-b border-richblack-700'
                        
                    />
                </label>

                <label className='w-full '>
                    <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem] '>
                        Last Name <sup className='text-pink-200'>*</sup>
                    </p>
                    <input 
                        required
                        type='text'
                        name='lastName'
                        onChange={changeHandler}
                        placeholder='Enter Last Name '
                        value={formData.lastName}
                        className=' bg-richblack-800 w-full rounded-[0.5rem] text-richblack-5 p-3 border-b border-richblack-700'
                        
                    />
                </label>

            </div>
            {/* email address */}
            <div className='mt-5'>   
                <label className='w-full '>
                    <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem] '>
                        Email Address <sup className='text-pink-200'>*</sup>
                    </p>
                    <input 
                        required
                        type='email'
                        name='email'
                        onChange={changeHandler}
                        placeholder='Enter Email Address '
                        value={formData.email}
                        className=' bg-richblack-800 w-full rounded-[0.5rem] text-richblack-5 p-3 border-b border-richblack-700'
                    />
                </label>
            </div>

            {/* password set feilds */}

            <div className='flex gap-x-4 mt-5 '>
                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem] '>
                        Create Password <sup className='text-pink-200'>*</sup>
                    </p>
                    <input 
                        // required
                        type={showPassword ? ("text") : ("password")}
                        name='password'
                        onChange={changeHandler}
                        placeholder='Enter Password '
                        value={formData.password}
                        className=' bg-richblack-800 w-full rounded-[0.5rem] text-richblack-5 p-3 border-b border-richblack-700'
                    />
                    <span
                        className='absolute right-3 top-[38px] cursor-pointer' 
                        onClick={() => setShowPassword ( (prev) => !prev)}
                    >
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>

                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 leading-[1.375rem] '>
                        Confirm Password <sup className='text-pink-200'>*</sup>
                    </p>
                    <input 
                        // required
                        type={showConfirmPassword ? ("text") : ("password")}
                        name='confirmPassword'
                        onChange={changeHandler}
                        placeholder='Confirm Password '
                        value={formData.confirmPassword}
                        className=' bg-richblack-800 w-full rounded-[0.5rem] text-richblack-5 p-3 border-b border-richblack-700'

                    />
                    <span 
                        className='absolute right-3 top-[38px] cursor-pointer'
                        onClick={() => setShowConfirmPassword ( (prev) => !prev)}
                    >
                            {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>
            </div>

            <button className='w-full text-center bg-yellow-50 rounded-[8px] font-medium px-[12px] py-[8px] mt-6'>
                Create Account
            </button>

        </form> 
    </div>
  )
}

export default SignupForm