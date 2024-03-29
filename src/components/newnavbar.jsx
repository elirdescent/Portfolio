import React, {useEffect} from "react";
import { Link } from "react-scroll";
import Header from "./header";
import Lottie from "lottie-react";
import animationData from "./ball.json";
import Aos from 'aos';
import 'aos/dist/aos.css';


const Navbar2 = () => {
    useEffect(()=>{
        Aos.init({duration: 500});
      }, []);
    return (
        <div class="">



<header class="w-full text-gray-700  shadow-sm body-font">
    
    
        <div class="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row" data-aos="fade-in">
            
            

            <nav class="flex flex-wrap items-center text-base lg:w-2/5 md:ml-auto">
                
              
            </nav>
           
            <a
                class="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-1/5 title-font lg:items-center lg:justify-center md:mb-0">
               <img src="/header.png" className="w-auto h-12" alt="" />
            </a>

            <div className="absolute top-0 right-0 opacity-30 hidden lg:block md:block">
             <Lottie animationData={animationData} className=""></Lottie> 
      </div>

            <div class="hidden lg:inline-flex md:inline-flex items-center h-full ml-5 lg:w-2/5 lg:justify-end lg:ml-0  ">
                

            <Link to="skills" 
     
     smooth={true} 
     offset={50} 
     duration={500}  class="relative text-purple-700 mr-5 inline cursor-pointer text-md font-semibold before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">Skills</Link>
                 <Link to="about" 
     
     smooth={true} 
     offset={50} 
     duration={500}  class="relative text-purple-700 mr-5 inline cursor-pointer text-md font-semibold before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">Experience</Link>

<Link to="work" 
     
     smooth={true} 
     offset={50} 
     duration={500}  class="relative text-purple-700 mr-5 inline cursor-pointer text-md font-semibold before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">Projects</Link>

<Link to="contact" 
     
     smooth={true} 
     offset={50} 
     duration={500}  class="relative text-purple-700 mr-5 inline cursor-pointer text-md font-semibold before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100">Contact</Link>

            </div>
        </div>
    </header>
    

</div>
    )
}

export default Navbar2