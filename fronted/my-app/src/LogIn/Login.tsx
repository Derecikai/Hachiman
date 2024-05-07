import React,{FC} from 'react'
import { useForm,SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'Context/userContext';

interface IFormInput {
  email: string;
  password: string;
}


const Login: React.FC = () => {

 const navigate = useNavigate();
 const {login} = useAuth();
 const postDat = async (data: IFormInput ) => {
  try{
    const response = await axios.post("http://localhost:8000/api/v1/users/login", {
    email: data.email,
    password: data.password})

    console.log(response.data.token);
    if(response.data.status === "Succes"){
      const token = response.data.token;
      login(token);
      navigate("/home");
    }
  }catch(err: any){
     console.log(err.response.data.message);
  }
 }

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(5).max(20).required(),
  })

const {register, handleSubmit, formState: {errors},}= useForm<IFormInput>({
  resolver: yupResolver(schema),
});

const onSubmit: SubmitHandler<IFormInput> = data =>{
    
  console.log(data);
  postDat(data);
}

  return (
    <div>
     <form className='formular' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='ceva'>Sign Up</h1>
        <h4 className='h4-sign'>Email * </h4>

        <input className='sign-input' type="text" 
        autoComplete="off" {...register("email")} />
        <p className='error-message'>{errors.email?.message}</p>



        <h4 className='h4-sign'>Password * </h4>
        <input className='sign-input' type="password" 
        {...register("password")} />
        <p className='error-message'>{errors.password?.message}</p>


       <input className='submit-butt' type="Submit" />
        </form>
        </div>
  )
}

export default Login