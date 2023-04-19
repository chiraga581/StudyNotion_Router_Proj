import React from 'react'
import Template2 from '../components/Template2'
import signupImg from '../assets/signup.png'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template2  
        title = "Join the millions learning to code with Study Notion for free"
        desc1 = "Build skills for today , tomorrow and beyond"
        desc2 = "Education to future-proof your career"
        image = {signupImg}
        formtype = "signup"
        setIsLoggedIn = {setIsLoggedIn}
    />
  )
}

export default Signup