import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextField from './TextField';
import api from '../api/api';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useStoreContext } from '../context/ContextApi';


const LoginPage = () => {

        const navigate = useNavigate();

        const [loader, setLoader] = useState(false);

        const { setToken } = useStoreContext();
 

        const {
            register, 
            handleSubmit,
            reset,
            formState:{errors}

        } = useForm({
            defaultValues: {
                username:"",
                email:"",
                password:"",

            },
            mode:"onTouched",
        });

        const loginHandler = async(data) => {
                setLoader(true);
                try{
                    const{data : response} = await api.post(
                        "/api/auth/public/login",
                        data
                    );
                    // Store the token in local storage
                    console.log(response.token);
                    setToken(response.token);
                    localStorage.setItem("JWT_TOKEN", JSON.stringify(response.token));
                    toast.success("Login successfull !!!")
                    reset();
                    navigate("/dashboard")

                }catch(error){
                    console.log(error);
                    toast.error("Login failed !!!") 
                }finally{
                    setLoader(false);
                }
        };

  return (
    <div
        className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
        <form onSubmit={handleSubmit(loginHandler)}
            className='sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md'>
            <h1 className='text-center font-serif text-orange-400 font-bold lg:text-3xl text-2xl'>
                Login Here
            </h1>    

            <hr className='mt-2 mb-5 text-black' />

            <div className='flex flex-col gap-3'>
                <TextField 
                    label="UserName"
                    required
                    id="username"
                    type="text"
                    message="Username is required"
                    placeholder="Type your username"
                    register={register}
                    errors={errors}
                />

            
                <TextField 
                    label="Password"
                    required
                    id="password"
                    type="password"
                    message="Password is required"
                    placeholder="Type your Password"
                    register={register}
                    min={6}
                    errors={errors}
                />
            </div>

            <button
                disabled={loader}
                type='submit'
                className='bg-customRed font-semibold text-black sm:text-lg px-8 py-3 w-full shadow-lg transition-all duration-300 transform hover: translate-y-2 hover:bg-[linear-gradient(90deg,_#d53369_0%,_#daae51_100%)] hover:text-white hover:shadow-xl' >
                    {loader ? "Loading... " : "Login"}
            </button>

            <p className='text-center text-sm text-slate-700 mt-6'>
                Don't have an account? 
                <Link
                    className='font-semibold underline hover:text-black'
                    to="/register">
                        <span className='text-orange-300'>  Register</span>
                </Link>
            </p>
        </form>
    </div>
  )
}

export default LoginPage;