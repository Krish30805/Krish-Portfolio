import Cards from "./Cards.jsx";
import { motion } from "framer-motion";


const Projects = () => {
  return (
    <div id="projects">
      <motion.h2 
      className="mt-20 text-center text-4xl font-semibold" 
      initial={{ opacity: 0, y:-20 }}
      whileInView={{ opacity:1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{once:true}}
      >Projects</motion.h2>
      <motion.div className="flex flex-wrap justify-center py-8 card"
      initial={{ opacity: 0, x:100 }}
      whileInView={{ opacity:1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{once:true}}>
        <Cards/>
        <div>
        </div>
      </motion.div>

      
    </div>
  )
}

export default Projects
