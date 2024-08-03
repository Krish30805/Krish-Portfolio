import { SKILLS } from "../constants";
import { motion } from "framer-motion";


const Skills = () => {
  const contVarients = {
    hidden: { opacity: 0 , y: 20},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0
      }
    }
  }

  const itemVarients = {
    hidden: { opacity: 0 , x: -20},
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5 ,
      }
    }
  }
  return (
    <div className="container pb-10" id="skills">
      <motion.h2 className="mb-12 mt-20 text-center text-4xl"
      initial={{ opacity: 0, y:-20 }}
      whileInView={{ opacity:1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{once:true}}>
        Skills
      </motion.h2>
      <motion.div className="mx-20 max-sm:mx-4 flex flex-col rounded-xl bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] px-4 py-10 lg:px-20"
      initial="hidden"
      whileInView="visible"
      variants={contVarients}
      viewport={{once:true}}>
        {SKILLS.map((skill,index)=>(
          <motion.div key={index} className="mb-8 flex items-center justify-between"
          variants={itemVarients}>
            <div className="flex items-center">
              {skill.icon}
              <h3 className="px-6 text-xl lg:text-3xl">
                {skill.name}
              </h3>
            </div>
            <div className="text-md border-b-2 border-yellow-400 font-semibold lg:text-xl">
              <span>{skill.experience}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
    </div>
  )
}

export default Skills
