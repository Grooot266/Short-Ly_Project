import React, { useState } from 'react'
import { useStoreContext } from '../../context/ContextApi'
import { useForm } from 'react-hook-form';
import TextField from '../TextField';
import { Tooltip } from '@mui/material';
import { RxCross2 } from 'react-icons/rx';
import toast from 'react-hot-toast';
import api from '../../api/api';


const CreateNewShorten = ({setOpen, refetch}) => {
    const {token} = useStoreContext();
    const[loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm({
        defaultValues : {
            originalURL :"",
        },
        mode : "onTouched",
    });


    const createShortUrlHandler = async (data) => {
        setLoading(true);
        try{
            const { data: res } = await api.post("/api/urls/shorten", data, {
                headers: {
                    "Content-Type":"application/json",
                    Accept: "application/json",
                    Authorization: "Bearer " + token, 
                },
            });

            const shortenUrl = `${import.meta.env.VITE_REACT_SUBDOMAIN}/${res.shortUrl}`;
            navigator.clipboard.writeText(shortenUrl).then(() => {
                toast.success("Short URL Copied to Clipboard", {
                    position:"bottom-center",
                    className:"mb-5",
                    duration:3600,
                });
            });

            // await refetch();
            reset();
            setOpen(false);
        } catch (error){
            toast.error("Create ShortUrl Failed");
        } finally{
            setLoading(false);
        }
    };

  return (
    <div className='flex justify-center items-center bg-white rounded-md'>
        <form
            onSubmit={handleSubmit(createShortUrlHandler)}
            className='sm:w-[450px] w-[360px] relative shadow-custom pt-8 pb-5 sm:px-8 px-4 rounded-'
        >
            <h1 className='font-montessrat sm:mt-0 mt-3 text-center font-bold sm:text-2xl text-[22px]'>
                Create New Shorten Url
            </h1>

            <hr className='="mt-2 sm:mb-5 mb-3 text-slate-950'/>

            <div>
                <TextField
                    label="Enter URL"
                    required
                    id="originalUrl"
                    placeholder="https://example.com"
                    type="url"
                    message="Url is required"
                    register={register}
                    errors={errors}
                />
            </div>

            <button
                className="bg-white border-2 border-black text-black font-semibold text-base sm:text-lg w-32 transition-all duration-300 transform hover:-translate-y-1 hover:bg-[linear-gradient(90deg,_#d53369_0%,_#daae51_100%)]  py-2  transition-colors  rounded-md my-3 hover:text-white hover:shadow-xl"
                type="text"
                >
                {loading ? "Loading..." : "Create"}
            </button>

            {!loading && (
                <Tooltip title="Close">
                <button
                    disabled={loading}
                    onClick={() => setOpen(false)}
                    className="absolute right-2 top-2"
                >
                    <RxCross2 className="text-slate-800 text-3xl"/>
                </button>
                </Tooltip>

            )}
        </form>
    </div>
  )
}

export default CreateNewShorten