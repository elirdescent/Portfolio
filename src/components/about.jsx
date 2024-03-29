import React, {useEffect} from "react";
import Lottie from "lottie-react";
import animationData from "./star.json";
import { Element } from "react-scroll";
import Aos from 'aos';
import 'aos/dist/aos.css';



const About = () =>{
  useEffect(()=>{
    Aos.init({duration: 2000});
  }, []);
    return(

      <Element name="about">
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" data-aos="zoom-in" data-aos-duration="1500">

        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          
          <div>
            <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-purple-700 uppercase rounded-full bg-teal-accent-400">
              ABOUT ME

            </p>
          </div>
          <h2 class="max-w-lg mb-6 font-sans text-5xl font-bold leading-none tracking-tight bg-gradient-to-r from-purple-600 via-cyan-500 to-indigo-400  text-transparent bg-clip-text sm:text-4xl md:mx-auto">
            <span class="relative inline-block">
              <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                <defs>
                  <pattern id="27df4f81-c854-45de-942a-fe90f7a300f9" x="0" y="0" width=".135" height=".30">
                    <circle cx="1" cy="1" r=".7"></circle>
                  </pattern>
                </defs>
                <rect fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)" width="52" height="24"></rect>
              </svg>
              
              <span class="relative"></span>
              
            </span>
           My Experience
            
       
          </h2>
          <p class="text-base text-gray-500 md:text-lg">
As a Computer Science student and freelance graphic designer, through research and university projects I've been able to gain experience in these fields:
          </p>
        </div>
        <div class="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
          <div class="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div class="mr-4">
              <div class="flex items-center justify-center w-12 h-12  rounded-full ">
              <Lottie className="hidden h-20 lg:block absolute inset-128  object-cover z-10 " animationData={animationData}></Lottie>
              </div>
            </div>
            <div>
              <h6 class="mb-3 text-xl font-bold leading-5 text-purple-400 z-50">Front-End Development</h6>
              <p class="mb-3 text-sm font text-gray-400 z-50">
                Knowledge and practice of HTML, CSS, JavaScript and TailwindCSS Framework. Recently I've also been getting into the basics of React and SPA development.
              </p>
              
              
          

            </div>
          </div>
          <div class="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            
            <div class="mr-4">
              <div class="flex items-center justify-center w-12 h-12  rounded-full ">
              <Lottie className="hidden h-20 lg:block absolute inset-128  object-cover z-10 " animationData={animationData}></Lottie>              </div>
            </div>
            <div>
              <h6 class="mb-3 text-xl font-bold leading-5 text-purple-400">Back-End Development</h6>
              <p class="mb-3 text-sm font text-gray-400 z-10">
Experience with Java Advanced OOP, PHP, practice of Laravel Framework and relational databases such as MySQL. Recently, I'm focusing on developing REST APIs through Laravel and testing them with Postman.

              </p>

            </div>
          </div>
          <div class="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div class="mr-4">
              <div class="flex items-center justify-center w-12 h-12  rounded-full ">
              <Lottie className="hidden h-20 lg:block absolute inset-128  object-cover z-10 " animationData={animationData}></Lottie>              </div>
            </div>
            <div>
              <h6 class="mb-3 text-xl font-bold leading-5 text-purple-400">Project Management</h6>
              <p class="mb-3 text-sm font text-gray-400">
                Knowledge of Agile SCRUM methodology including SDD and experience with project management tools and techniques such as GitHub and Trello. 
              </p>

            </div>
          </div>
          <div class="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div class="mr-4">
              <div class="flex items-center justify-center w-12 h-12  rounded-full ">
                
              <Lottie className="hidden h-20 lg:block absolute inset-128  object-cover z-10 " animationData={animationData}></Lottie>              </div>
            </div>
            <div>

              
              <h6 class="mb-3 text-xl font-bold leading-5 text-purple-400">Graphic Design</h6>
              <p class="mb-3 text-sm font text-gray-400">
             In my free-time, I work as a freelance graphic designer mainly working on cover artwork, poster and merchandise design. I also do UI/UX design for my projects and for high-fidelity prototyping.
             
              </p>

            </div>
          </div>
        </div>
      </div>
      </Element>
    )
}

export default About