import React, {useEffect, useRef} from 'react'
import { Element } from 'react-scroll';
import { ReactTyped } from "react-typed";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(()=>{
    Aos.init({duration: 1500});
  }, []);
    return (
      <Element name="header">
      <div className='maincontainer'>
       
        <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
        <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
          <img
            src="/computer.png"
            className="object-cover object-right w-full h-auto lg:w-auto lg:h-full "
            alt=""
            data-aos="fade-right"
            data-aos-duration="1000"
          />
        </div>
        <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
          <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6" data-aos="zoom-out-left" data-aos-duration="1000">
              
              <h2 className="max-w-lg  font-sans text-3xl font-bold tracking-tight  bg-gradient-to-r from-purple-600 via-cyan-500 to-indigo-400  text-transparent bg-clip-text">
               Hi! I'm Elird.
              </h2>

              <h2 className="max-w-lg font-sans text-3xl font-bold tracking-tight  bg-gradient-to-r from-purple-600 via-cyan-500 to-indigo-400  text-transparent bg-clip-text">
                <span className='text-neutral-200'>I'm a</span>&nbsp;
              <ReactTyped strings={["full-stack developer.",
            "graphic designer.",
            "UI/UX designer."]} typeSpeed={40} backSpeed={40} loop/>
              </h2>
              <p className="text-base text-gray-600 md:text-lg">
                Welcome to my portfolio page! I'm a 20 year old passionate full-stack developer and designer from Prizren, Kosovo currently in my final year of college pursuing a Bachelor's degree in Computer Science, specializing in Software Engineering.
            
              </p>

          <div class="container max-w-screen-lg mx-auto">
    <div>
      <h2 class="mt-5 text-3xl font-semibold text-start mb-6 bg-gradient-to-r from-purple-600 via-cyan-500 to-indigo-400  text-transparent bg-clip-text">Connect with me:</h2>

      <div class="ml-1 flex flex-wrap justify-start gap-2">
        <a href="https://www.facebook.com/elird.elshani"><button class="bg-blue-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition duration-200 ease-in-out  p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-xl">
<img src="/fb.svg" alt=""className='h-5' href="" />
        </button></a>

       <a href="https://www.behance.net/elird"> <button class="bg-blue-800 hover:shadow-[0_20px_50px_rgba(0,_0,_128,_0.7)] transition duration-200 ease-in-out p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-xl">
<img src="/behance.svg" alt=""className='h-5' />
        </button></a>

      <a href="https://www.instagram.com/perplekcia"><button class="bg-purple-700 hover:shadow-[0_20px_50px_rgba(128,_0,_128,_0.7)]  transition duration-200 ease-in-out p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-xl">
<img src="/instagram.svg" alt=""className='h-5' />
        </button></a> 

        <button class="bg-red-800 hover:shadow-[0_20px_50px_rgba(255,_0,_0,_0.7)]  transition duration-200 ease-in-out p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-xl">

<a href="mailto:elirdelshani@gmail.com">
<img src="/email.svg" alt=""className='h-5' />
</a>
        </button>



       

        


      </div>
    </div>
  </div>
            </div>
           
          </div>
        </div>
      </div>
    
      </div>
      </Element>
    )

}

export default Header
