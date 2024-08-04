import image1 from "../assets/rest.png"
import image2 from "../assets/whac a mole.png";
import image3 from "../assets/ecom.png";
import image4 from "../assets/cocacolalp.png";
import image5 from "../assets/avengerspuzzle.png";
import image6 from "../assets/expensetracker.png";
import image7 from "../assets/flappybird.png";
import image8 from "../assets/tribute.png";





import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const Cards = () => {

  return (
    <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center gap-10 bg-gradient-to-br px-4 py-12 text-slate-900">
      <TiltCard title="Restaurant" image={image1} subtitle="A restaurant e-commerce page made with basics of web development." link="https://krish30805.github.io/Restaurant-E-comm/"/>
      <TiltCard title="Whac A Mole" image={image2} subtitle="An enthusiatic game made by using html , css and javascript." link="https://krish30805.github.io/Whac-A-Mole-game/" />
      <TiltCard title="E-commerce MedStore" image={image3} subtitle="An e-comm resonsive medical store home page made by using frontend basics html and css." link="https://krish30805.github.io/E-commerce-MedStore/" />
      <TiltCard title="Coca-Cola Landing Page" image={image4} subtitle="A Re-disgned landing page of Coca-Cola using html and css." link="https://krish30805.github.io/Landing-page/" />
      <TiltCard title="Avenger's Puzzle" image={image5} subtitle="A small game of puzzle solving an image of avengers." link="https://krish30805.github.io/Avenger-s-Puzzle/" />
      <TiltCard title="Expense Tracker" image={image6} subtitle="An expense tracker for your keeping track on your budget made by using html, css and javascript." link="https://krish30805.github.io/Expense-Tracker/" />
      <TiltCard title="FlappyBird" image={image7} subtitle="An enthusiatic game made by using html , css and javascript." link="https://krish30805.github.io/FlappyBird-Game/" />
      <TiltCard title="Tribute to APJ.AK" image={image8} subtitle="A tribute page to apj abdul kalam,the misile man of India." link="https://krish30805.github.io/Tribute-APJ/" />
    </div>
  );
};

const ROTATION_RANGE = 13.5;
const HALF_ROTATION_RANGE = 13.5 / 2;

const TiltCard = (props) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{transformStyle: "preserve-3d",transform,}}
      className="relative h-96 w-80 rounded-xl bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
    
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-between rounded-xl shadow-lg"
      >
        <h2
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-xl font-bold text-white absolute top-4 left-2"
        >
          {props.title}
        </h2>
        <img src={props.image}
          style={{
            transform: "translateZ(50px)",
            width:"100%",
            height:"35%",
          }}
          className="text-2xl font-bold absolute top-[16%] rounded-xl"
        />
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-start text-2 text-white absolute top-[55%] left-1"
        >
          {props.subtitle}
        </p>

        <a target="_blank" href={props.link} className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#ac23b8] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-12 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg top-[290px]">
  Check out
  </a>


      </div>
    </motion.div>
    
  );
};

export default Cards;


