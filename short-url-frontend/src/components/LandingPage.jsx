import React from 'react'
import { HiLink } from "react-icons/hi";
import Cards from './Cards';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useStoreContext } from '../context/ContextApi';

const LandingPage = () => {

  const navigate = useNavigate();

  const { token } = useStoreContext();
  console.log("TOKEN FROM LANDING PAGE : " + token );

  const dashBoardNavigateHandler = () => {};

  return (

    <section className="bg-white text-black py-16 sm:py-20 px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Logo + App Name */}
        <motion.div 
           initial={{ opacity: 0, y: -80}}
            whileInView={{
              opacity: 1,
              y: 0
            } }
            viewport={{once: true}}
            transition={{duration:3}}
            onClick={dashBoardNavigateHandler}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4 group cursor-pointer">
        <HiLink size={50} className="text-black"/>
          <h1 className="text-5xl sm:text-4xl md:text-5xl font-extrabold tracking-tight transition-all duration-300 group-hover:bg-[linear-gradient(90deg,_#d53369_0%,_#daae51_100%)] group-hover:bg-clip-text group-hover:text-transparent">
            Short-ly
          </h1>
        </motion.div>


        {/* Main Tagline */}
        <motion.p  
            initial={{ opacity: 0, y: -80}}
            whileInView={{
              opacity: 1,
              y: 0
            } }
            viewport={{once: true}}
            transition={{duration:1.5}}
            onClick={dashBoardNavigateHandler}
        className="text-base sm:text-lg md:text-xl text-black mb-6 max-w-2xl leading-relaxed">
          Fast, reliable, and effortless — shorten long links into clean, shareable URLs in seconds.
        </motion.p>

        {/* Supporting Text */}
        <motion.p 
           initial={{ opacity: 0, y: -80}}
            whileInView={{
              opacity: 1,
              y: 0
            } }
            viewport={{once: true}}
            transition={{duration:1}}
          className="text-sm sm:text-base md:text-lg text-black-100 mb-10 max-w-3xl leading-relaxed px-2">
          Track performance, customize short links, and manage them all from one simple dashboard. 
          Perfect for creators, marketers, and teams who want their links to work smarter.
        </motion.p>

    {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button 
             initial={{ opacity: 0, x: -80}}
            whileInView={{
              opacity: 1,
              x: 0
            } }
            viewport={{once: true}}
            transition={{duration:0.3}}
            className="bg-white border-2 border-black text-black font-semibold text-base sm:text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-[linear-gradient(90deg,_#d53369_0%,_#daae51_100%)] hover:text-white hover:shadow-xl">
            Create Short URL
          </motion.button>
          <motion.button 
             initial={{ opacity: 0, x: 80}}
            whileInView={{
              opacity: 1,
              x: 0
            } }
            viewport={{once: true}}
            transition={{duration:0.3}}
            className="bg-white border-2 border-black text-black font-semibold text-base sm:text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-[linear-gradient(90deg,_#d53369_0%,_#daae51_100%)] hover:text-white hover:shadow-xl">
            Manage Links
          </motion.button>
        </div>

        {/* Slogan */}
        <motion.p
           initial={{ opacity: 0, y: 80}}
            whileInView={{
              opacity: 1,
              y: 0
            } }
            viewport={{once: true}}
            transition={{duration:1}} 
          className="mt-10 italic text-black text-xs sm:text-sm md:text-base">
          Short-ly — Shorten. Share. Simplify.
        </motion.p>
      </div>
      {/* Cards */}
      <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4 " >
      <Cards 
        title={"Custom Short URLs"}
        desc={"Personalize your shortened links to match your brand identity and make them more recognizable."}
      />
      <Cards 
        title={"Track Link Performance"}
        desc={"View real-time analytics to understand how your audience interacts with each link you share."}
      />
      <Cards
        title={"Secure & Reliable Redirections"}
        desc={"Ensure every click is safely redirected with enterprise-grade encryption and uptime reliability."}
      />
     <Cards 
      title={"Shorten URLs Instantly"} 
      desc={"Create clean, shareable links in just one click — fast, simple, and reliable."} 
    />

      </div>
    </section>
  );
}

export default LandingPage