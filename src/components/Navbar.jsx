import { useState } from "react";
import logo from "../assets/logo-2.png";
import { NAVIGATION_LINKS } from "../constants";
import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Navbar = () => {

  useGSAP(()=>{
  const tl = gsap.timeline();
    tl.from(".nav",{
      y:-30,
      opacity:0,
      duration:0.7,
      delay:1,
    })

    tl.from(".links",{
      y:-30,
      opacity:0,
      stagger:0.2
    })
  })

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if(targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior:"smooth"
      })
    }
    setIsMobileMenuOpen(false);
  }
  return (
    <div>
      <nav className="fixed left-0 right-0 my-0 xl:my-4 lg:my-4 z-50 sm:top-0 top-0">
        {/* Desktop menu */}
        <div className="nav mx-auto hidden max-w-3xl items-center justify-center rounded-lg bg-black/40 py-3 backdrop-blur-lg lg:flex">
          <div className="flex justify-between items-center gap-8">
            <div>
              <a href="#">
                <img className="max-w-[110px]" src={logo} alt="" />
              </a>
            </div>
            <div>
              <ul className="flex items-center gap-5">
                {NAVIGATION_LINKS.map((item,index)=>(
                  <li key={index}>
                    <a className="links text-md hover:text-violet-500"
                     href={item.href} onClick={(e) => handleLinkClick(e,item.href)}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
         </div>
         {/* Mobile menu */}
         <div className="bg-black/40 blackdrop-blur-md p-5  lg:hidden">
          <div className="flex items-center justify-between">
            <div>
              <a href="#">
                <img src={logo} width={90} alt="logo" className="m-2"/>
              </a>
            </div>
            <div className="flex items-center">
              <button className="focus:outline-none lg:hidden" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? (
                  <FaTimes className="m-2 h-6 w-5"/>) :(
                  <FaBarsStaggered className="m-2 w-5 h-6"/>
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <ul className="ml-4 mt-4 flex flex-col gap-6">
              {NAVIGATION_LINKS.map((item,index)=>(
                <li key={index}>
                  <a href={item.href} className="block w-full text-xl font-semibold" onClick={(e) => handleLinkClick(e,item.href)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
         </div>
      </nav>
      
    </div>
  )
}

export default Navbar
