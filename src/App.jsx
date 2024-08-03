import "./App.css";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar" ;
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import File from "./components/File";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { motion } from "framer-motion";




const App = () => {
  useGSAP(()=>{
    gsap.to(".intro",{
      height:"0",
      opacity:0,
      delay:1,
      duration:1,     
    })
    gsap.from("#hello",{
      opacity:1,
      scale:0.5,
    })

    gsap.to("#hello",{
      duration:2.2,
      opacity:0,
    })

  })
  return (
    <main className="overflow-hidden bg-black tracking-tighter text-gray-200 antialiased selection:bg-violet-800 ">
      <div 
      className="intro flex justify-center place-items-center bg-black h-screen">
        <motion.h1 
        className="font-bold text-8xl text-gray-200" id="hello"
        initial={{ opacity: 1, scale: 0.5 }}
        whileInView={{ opacity:0 }}
        transition={{ duration: 2 }}
        viewport={{once:true}}
        >Namaste<span className="text-violet-500 text-9xl">!</span></motion.h1>
      </div>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Projects/>
      <Skills/>
      <File/>
      <ContactForm/>
      <hr className="mt-20"/>
      <Footer/>
    </main>


    
  )
}

export default App
