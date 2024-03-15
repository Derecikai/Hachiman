import React,{useEffect,useState} from 'react'
import './SignUp.css'
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const SignUp = () => {

  

  const schema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(5).max(20).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required(),
  })

const {register, handleSubmit, formState: {errors},}= useForm({
  resolver: yupResolver(schema),
});

  const [text] = useTypewriter({
    words: ['JO SI SAMI SEXY', 'A DESIGNER?', 'AN AI TEACHER?', 'A DEVELOPER?'],
    loop: {},
    typeSpeed: 170,
    deleteSpeed: 70
  })


  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className='yo12'>
     <div className='left-sing'>
      <div className='cover-sign'>
      </div>
      <div className='ball-sign'></div>
<div className='start-sign'>
      <h3 className='sign-txt'>WANT TO BE  
<span className='span2'> {text}</span>
  <span>{<Cursor />} </span></h3>

    <p className='sign-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore necessitatibus eaque, enim, eum voluptas  sapiente ducimus ullam vitae voluptatum quam autem  optio astre <span className='span2'>alias! Tenetur veritatis est alias voluptas! Officia molestiae deleniti eaque consequatur!</span></p>

     </div>
     
     </div>
     <div className='right-sing'>
  
      <div className='form-shit'>
        <form className='formular' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='ceva'>Sign Up</h1>
        <h4 className='h4-sign'>Email *</h4>

        <input className='sign-input' type="text" 
        autoComplete="off" {...register("email")} />
        <p className='error-message'>{errors.email?.message}</p>

        <h4 className='h4-sign'>Username *</h4>
        <input className='sign-input' type="text" autoComplete="off"
        {...register("username")} />
        <p className='error-message'>{errors.username?.message}</p>

        <h4 className='h4-sign'>Password *</h4>
        <input className='sign-input' type="password" 
        {...register("password")} />
        <p className='error-message'>{errors.password?.message}</p>

        <h4 className='h4-sign'>Confirm Password *</h4>
        <input className='sign-input' type="password" 
       {...register("confirmPassword")} />
       <p className='error-message'>{errors.confirmPassword?.message}</p>
       
       {/* <div className='logos-sign'>
        
        <FaGoogle className='sign-up-logo'/> 
        <h2 className='logo-text-siogn'>Login with Google</h2>
       </div> */}

       <input className='submit-butt' type="Submit" />
        </form>
      
      </div>

     </div>
    </div>
  )
}

export default SignUp