import image1 from "../assets/animatedlp.png";
import image2 from "../assets/avengerspuzzle.png";
import image3 from "../assets/cocacolalp.png";
import image4 from "../assets/ecom.png";
import image5 from "../assets/expensetracker.png";
import image6 from "../assets/flappybird.png";
import image7 from "../assets/whac a mole.png";

import { RiReactjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";


export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Krish Jain",
  info: "Frontend Developer",
};

export const ABOUT = {
  text1:
    "I create dynamic, responsive websites that blend creativity with efficiency",
  text2:
    "Hey! I'm Krish Jain, a frontend developer with a flair for graphic design. I thrive on crafting web experiences that are not only visually stunning but also highly functional and user-friendly. My passion for detail ensures that every project is polished and professional. Beyond coding, I'm an avid explorer of new cultures and cuisines. My curiosity drives me to stay on the cutting edge of technology and design trends, bringing innovative and practical solutions to every challenge. Whether I'm developing a sleek website or diving into the latest tech, I am dedicated to delivering excellence in every project.",
};

export const PROJECTS = [
  {
    title: "Animated Landing Page",
    subtitle:
      "An animated landing page made with basics of frontend using html , css and using gsap for animation.",
    image: image1,
  },
  {
    title: "Whac A Mole",
    subtitle: "An enthusiatic game made by using html , css and javascript.",
    image: image7,
  },
  {
    title: "E-commerce MedStore",
    subtitle:
      "An e-comm resonsive medical store home page made by using frontend basics html and css.",
    image: image4,
  },
  {
    title: "Avenger's Puzzle",
    subtitle:
      "A small game of puzzle solving an image of avengers. ",
    image: image2,
  },
  {
    title: "Coca-Cola Landing Page",
    subtitle: "A Re-disgned landing page of Coca-Cola using html and css.",
    image: image3,
  },
  
  {
    title: "Expense Tracker",
    subtitle:
      "An expense tracker for your keeping track on your budget made by using html , css and javascript.",
    image: image5,
  },
  {
    title: "FlappyBird",
    subtitle:
      "An enthusiatic game made by using html , css and javascript.",
    image: image6,
  },
  
];


export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
    experience: "3+ months",
  },
  {
    icon: <IoLogoJavascript className="text-4xl lg:text-6xl text-yellow-400" />,
    name: "Javascript",
    experience: "1+ year",
  },
  {
    icon: <FaCss3 className="text-4xl lg:text-6xl text-sky-600" />,
    name: "CSS",
    experience: "1.5+ years",
  },
  {
    icon: <FaHtml5 className="text-4xl lg:text-6xl text-red-600" />,
    name: "HTML",
    experience: "2+ year",
  },
];


export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <div className="group relative inline-block">
    <button className="focus:outline-none">
      <svg
        viewBox="0 0 16 16"
        className="bi bi-instagram transform transition-transform duration-300 hover:scale-125 hover:text-[#ee2a7b]"
        fill="currentColor"
        height="30"
        width="30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
        ></path>
      </svg>
    </button>
    <span
      className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100"
      >Instagram</span></div>
  },
  {
    href: "https://github.com/Krish30805",
    icon: <div className="group relative inline-block">
    <button className="focus:outline-none">
      <svg
        viewBox="0 0 24 24"
        className="bi bi-instagram transform transition-transform duration-300 hover:scale-125  "
        fill="currentColor"
        height="30"
        width="30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
      </svg>
    </button>
    <span
      className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100"
      >GitHub</span></div>
  },
  {
    href: "https://www.linkedin.com/in/krish-jain-92286320b/",
    icon: <div className="group relative inline-block">
    <button className="focus:outline-none">
      <svg
        viewBox="0 0 24 24"
        className="bi bi-instagram transform transition-transform duration-300 hover:scale-125 hover:text-blue-500"
        fill="currentColor"
        height="30"
        width="30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
      </svg>
    </button>
    <span
      className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100"
      >LinkedIn</span></div>
  },
];