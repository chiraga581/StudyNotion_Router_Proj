import React from 'react'
import Template2 from '../components/Template2'
import loginImg  from "../assets/login.png"

const Login = ({setIsLoggedIn}) => {
  return (
    <Template2  
        title = "Welcome Back"
        desc1 = "Build skills for today , tomorrow and beyond"
        desc2 = "Education to future-proof your career"
        image = {loginImg}
        formtype = "login"
        setIsLoggedIn = {setIsLoggedIn}
    />
  )
}

export default Login