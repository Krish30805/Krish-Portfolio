import { useState } from "react";
import emailjs from "@emailjs/browser"
import toast, { Toaster } from 'react-hot-toast';
import { motion } from "framer-motion";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    message:"",
  })

  const [errors, setErrors] = useState({})

  const [isSending, setIsSending] = useState(false)

  const handleChange = (e) => {
    const { name , value } = e.target;
    setFormData({
      ...formData,
      [name] : value,
    })
  }

  const validate = () => {
    let errors = {};
    if(!formData.name)errors.name = "Name is required";
    if(!formData.email) {
      errors.email = "Email is required"
    } else if(!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors ;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
         .send(
          "service_6ag3go8",
          "template_evd1t19",
          formData,
          "bAYQPX9ge9rxMGerh",
         )
         .then((response) => {
          console.log("SUCCESS" , response.status , response.text);
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "",});
         })
         .catch((error)=> {
          console.log("FAILED...",error);
          toast.error("Failed to send message. Please try again later.")
         })
         .finally9(()=> {
          setIsSending(false);
         })
    }
  }


  
  return (
    <div className="mx-auto mt-10 mx-w-3xl p-4" id="contact">
      <Toaster/>
      <motion.h2 
      initial={{ opacity: 0, y:-20 }}
      whileInView={{ opacity:1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{once:true}} className="my-8 text-center text-4xl font-semibold tracking-tighter">Let's Create Something Together...</motion.h2>
      <motion.form onSubmit={handleSubmit} className="flex flex-col items-center"
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.8,delay:1}}>
        <div className="relative mb-4 rounded-lg max-sm:w-full w-[50%] overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
          <input id="name" name="name" value={formData.name} placeholder="Name" onChange={handleChange} className="relative bg-transparent ring-0 outline-none border border-neutral-500 text-white  text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-60 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500" type="text"/>
            {errors.name && (
            <motion.p className="text-sm text-pink-700"
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            aria-live="polite">
              {errors.name}</motion.p>
          )}
        </div>
        <div className="relative mb-4 rounded-lg max-sm:w-full w-[50%] overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
            <input id="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} className="relative bg-transparent ring-0 outline-none border border-neutral-500 text-white  text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-60 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500 " type="text"/>
            {errors.email && (
            <motion.p initial={{opacity:0}}
            whileInView={{opacity:1}}
            aria-live="polite"
            className="text-sm text-pink-700">{errors.email}</motion.p>
          )}
        </div>
        <div className="relative mb-4 rounded-lg max-sm:w-full w-[50%] overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
          <textarea id="message" name="message" value={formData.message} placeholder="Message" onChange={handleChange} className="relative bg-transparent ring-0 outline-none border border-neutral-500 text-white text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-60 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500" rows="3"/>
            {errors.message && (
            <motion.p initial={{opacity:0}}
            whileInView={{opacity:1}}
            aria-live="polite"
            className="text-sm text-pink-700">{errors.message}</motion.p>
          )}
        </div>
        <button className={`group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-[50%] border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg mb-8 max-sm:w-full ${ isSending ? "cursor-not-allowed opacity-50" : "" } `} disabled={isSending}>
          {isSending ? "Sending..." : "Send"}
        </button>
      </motion.form>
      
    </div>
  )
}

export default ContactForm
