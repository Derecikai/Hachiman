import React,{useEffect,useState} from 'react'
import './SignUp.css'
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  
  const navigate = useNavigate();

  const schema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(5).max(20).required(),
    passwordConfirm: yup.string().oneOf([yup.ref("password"), null]).required(),
  })

const {register, handleSubmit, formState: {errors},}= useForm({
  resolver: yupResolver(schema),
});

  // const [text] = useTypewriter({
  //   words: ['JO SI SAMI SEXY', 'A DESIGNER?', 'AN AI TEACHER?', 'A DEVELOPER?'],
  //   loop: {},
  //   typeSpeed: 170,
  //   deleteSpeed: 70
  // })


  const onSubmit = async (data) => {
    console.log(data);
    try{

      const response = await axios.post('http://localhost:8000/api/v1/users/signup', {
        email: data.email,
        password: data.password,
        passwordConfirm: data.passwordConfirm,
        username: data.username
      });

      console.log(response.data);
      navigate('/home');

    }catch(err)
    {
     console.log(err.response.data.message);
    }
  }

  return (
    <div className='yo12'>

     <div className='sign-container'>

    <div className='left-sign'>
      <div className='left-shadow'></div>
    </div>
    <div className='right-sign'>
   
        <form className='formular' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='ceva'>Sign Up</h1>
        <h4 className='h4-sign'>Email * </h4>

        <input className='sign-input' type="text" 
        autoComplete="off" {...register("email")} />
        <p className='error-message'>{errors.email?.message}</p>

        <h4 className='h4-sign'>Username *</h4>
        <input className='sign-input' type="text" autoComplete="off"
        {...register("username")} />
        <p className='error-message'>{errors.username?.message}</p>

        <h4 className='h4-sign'>Password * </h4>
        <input className='sign-input' type="password" 
        {...register("password")} />
        <p className='error-message'>{errors.password?.message}</p>

        <h4 className='h4-sign'>Confirm Password *</h4>
        <input className='sign-input' type="password" 
       {...register("passwordConfirm")} />
       <p className='error-message'>{errors.passwordConfirm?.message}</p>

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