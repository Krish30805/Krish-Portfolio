import logo from "../assets/logo-2.png";
import { SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";


const Footer = () => {
  return (
    <div className="mb-8 mt-10">
      <motion.div 
      initial={{ opacity: 0, y:50 }}
      whileInView={{ opacity:1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{once:true}} className="flex items-center justify-between px-20 max-sm:flex-col max-sm:gap-5">
        <img src={logo} alt="logo" id="logo" width={100} className="mb-2"/>
        <div className="flex items-center justify-center gap-8 w-[50%]">
        {SOCIAL_MEDIA_LINKS.map((link , index)=>(
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
            {link.icon}
          </a>
        ))}
      </div>
      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
        &copy;KrishJain. All rights reserved.
      </p>
      </motion.div>
      
    </div>
  )
}

export default Footer
