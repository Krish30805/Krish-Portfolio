import { PROFILE } from "../constants";
import profilePic from "../assets/unnamed.jpg";
import { motion } from "framer-motion";


const HeroSection = () => {
  return (
    <>
    <div className="relative flex min-h-screen items-end justify-center" id="hero">
      <img 
      src={profilePic} 
      alt={PROFILE.name} 
      className="absolute inset-0 z-10 h-full w-full object-cover"/>
      <div 
      className="absolute inset-0 z-10 bg-gradient-to-b from transparent from-60% to-bal lg:from-30%"></div>
      <div 
      className="z-20 mx-4 max-w-3xl pb-20">
        <motion.h1 
        className="text-6xl text-[#ffffff] font-semibold uppercase tracking-wider md:text-8xl" id="name"
        initial={{ opacity: 0, y:50 }}
        whileInView={{ opacity:1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{once:true}}>
          {PROFILE.name}
        </motion.h1>
        <motion.p className="pt-2 px-1 text-4xl font-semibold text-[#ffffff]" id="info"
        initial={{ opacity: 0, y:50 }}
        whileInView={{ opacity:1, y: 0 }}
        transition={{ duration: 1,delay:0.5 }}
        viewport={{once:true}}
        >{PROFILE.info}</motion.p>
      </div>
    </div>
    </>
    
  )
}

export default HeroSection;
