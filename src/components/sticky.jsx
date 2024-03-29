import React, {useEffect} from 'react';
import { motion, useInView, useAnimation } from "framer-motion";
import { Element } from 'react-scroll';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Sticky = () => {
  useEffect(()=>{
    Aos.init({duration: 1000});
  }, []);
    return(
      <Element name="work">
        <div class="relative">
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12" data-aos="fade-in">
          
          <div>
          
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
              
              <span class="relative p-2"></span>
              
            </span>
       My Projects
            
       
          </h2>
          <p class="text-base text-gray-500 md:text-lg px-4">
These are some of the projects that I've worked on:
          </p>
        </div>

         
        <div class=" top-0 b-0   items-center justify-center 00">

        <div class="max-w-6xl mx-auto mt-8 p-5 relative" data-aos="zoom-in">
    <div class="w-full h-11 rounded-t-lg bg-gray-900 flex justify-start items-center space-x-1.5 px-3" >
        <span class="w-3 h-3 rounded-full bg-red-400"></span>
        <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span class="w-3 h-3 rounded-full bg-green-400"></span>
    </div>
    <div class="bg-gray-700 rounded-b relative">
        <img src="/g2go.png" class="p-2 border-t-0 max-w-full h-auto rounded-2xl"/>
        <div class="absolute inset-0 bg-gray-700 opacity-0 hover:opacity-100 transition-opacity rounded-b-xl">
        <div class="hero h-full bg-gray-700 rounded-b ">
  <div class="hero-content flex-col  lg:flex-row-reverse">
    <div>
        <div class="flex flex-col">
    <p class="inline-block mb-2 ml-1 text-xs font-semibold tracking-wider text-purple-700 uppercase rounded-full bg-teal-accent-400">
              FULL-STACK

            </p>
            <p class="inline-block mb-2 ml-1 text-xs font-semibold tracking-wider text-neutral-400 uppercase rounded-full bg-teal-accent-400">
              HTML, CSS, JAVASCRIPT, PHP, MYSQL

            </p>
            </div>
     <img src="/g2g.png" className="h-8 mb-2" alt="" />
      <p class="mt-2 mb-3 text-gray-400 hidden md:block ">One of my first projects ever, a restaurant web application providing a dynamic virtual menu, online ordering services and admin dashboard. The admin can post new menu items and view orders, while the user can view the menu when registering and logging in to his account.</p>
      <button class="btn btn-md btn-neutral mt-2">GitHub</button>
    </div>
  </div>
</div>
        
        </div>
    </div>
</div>
        </div>
        <div class="top-0 b-0   items-center justify-center 00">
        <div class="max-w-6xl mx-auto mt-8 p-5 relative" data-aos="zoom-in">
    <div class="w-full h-11 rounded-t-lg bg-gray-900 flex justify-start items-center space-x-1.5 px-3" >
        <span class="w-3 h-3 rounded-full bg-red-400"></span>
        <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span class="w-3 h-3 rounded-full bg-green-400"></span>
    </div>
    <div class="bg-gray-700 rounded-b relative">
        <img src="/lb1.png" class="p-2 border-t-0 max-w-full h-auto rounded-2xl"/>
        <div class="absolute inset-0 bg-gray-700 opacity-0 hover:opacity-100 transition-opacity rounded-b-xl">
        <div class="hero h-full bg-gray-700 rounded-b ">
  <div class="hero-content flex-col  lg:flex-row-reverse">
    <div>
        <div class="flex flex-col">
    <p class="inline-block mb-2 ml-1 text-xs font-semibold tracking-wider text-purple-700 uppercase rounded-full bg-teal-accent-400">
              FULL-STACK

            </p>
            <p class="inline-block mb-2 ml-1 text-xs font-semibold tracking-wider text-neutral-400 uppercase rounded-full bg-teal-accent-400">
             TailwindCSS, Laravel, MySQL

            </p>
            </div>
<img src="/lbone.png" className="h-10" alt="" />
      <p class="mt-2 mb-3 hidden md:block text-gray-400 ">A web application where lawyers can manage their legal work such as: case management, client management and legal consulting. On the other hand there's also a client role, where the user can actively search for lawyers to work with, rate the lawyers and share their legal issues. The web application comes with an advanced search functionality so both the lawyers and clients have an easier process of searching for desired content.</p>
      <button class="btn btn-md btn-neutral mt-2">GitHub</button>
    </div>
  </div>
</div>
        
        </div>
    </div>
</div>
        </div>
        <div class=" top-0 b-0   items-center justify-center 00">
        <div class="max-w-6xl mx-auto mt-8 p-5 relative" data-aos="zoom-in">
    <div class="w-full h-11 rounded-t-lg bg-gray-900 flex justify-start items-center space-x-1.5 px-3">
        <span class="w-3 h-3 rounded-full bg-red-400"></span>
        <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span class="w-3 h-3 rounded-full bg-green-400"></span>
    </div>
    <div class="bg-gray-700 rounded-b relative">
        <img src="/lb2.png" class="p-2 border-t-0 max-w-full h-auto rounded-2xl"/>
        <div class="absolute inset-0 bg-gray-700 opacity-0 hover:opacity-100 transition-opacity rounded-b-xl">
        <div class="hero h-full bg-gray-700 rounded-b ">
  <div class="hero-content flex-col  lg:flex-row-reverse">
    <div>
        <div class="flex flex-col">
    <p class="inline-block mb-2 ml-1 text-xs font-semibold tracking-wider text-purple-700 uppercase rounded-full bg-teal-accent-400">
              FULL-STACK

            </p>
            <p class="inline-block mb-2 ml-1 text-xs font-semibold tracking-wider text-neutral-400 uppercase rounded-full bg-teal-accent-400">
             TailwindCSS, Laravel + Sanctum, MySQL, Postman

            </p>
            </div>
<img src="/lbtwo.png" className="h-10" alt="" />
      <p class="mt-2 mb-3 hidden md:block text-gray-400  ">A more advanced version of Legalbox, where the lawyers have additional functionalities for scheduling meetings and filtering data. In this newer version of Legalbox, I have also implemented REST API and token authentication using Laravel Sanctum. The API was tested through Postman for back-end functionality.</p>
      <button class="btn btn-md btn-neutral mt-2">GitHub</button>
    </div>
  </div>
</div>
        
        </div>
    </div>
</div>
        </div>

        <div class=" top-0 b-0   items-center justify-center 00">
        <div class="max-w-6xl mx-auto mt-8 p-5 relative" data-aos="zoom-in">
    <div class="w-full h-11 rounded-t-lg bg-gray-900 flex justify-start items-center space-x-1.5 px-3">
        <span class="w-3 h-3 rounded-full bg-red-400"></span>
        <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span class="w-3 h-3 rounded-full bg-green-400"></span>
    </div>
    <div class="bg-gray-700 rounded-b relative">
        <img src="/ek.png" class="p-2 border-t-0 max-w-full h-auto rounded-2xl"/>
        <div class="absolute inset-0 bg-gray-700 opacity-0 hover:opacity-100 transition-opacity rounded-b-xl">
        <div class="hero h-full bg-gray-700 rounded-b ">
  <div class="hero-content flex-col  lg:flex-row-reverse">
    <div>
        <div class="flex flex-col">
    <p class="inline-block mb-2 ml-1 text-xs font-semibold tracking-wider text-purple-700 uppercase rounded-full bg-teal-accent-400">
              UI/UX

            </p>
            <p class="inline-block mb-2 ml-1 text-xs font-semibold tracking-wider text-neutral-400 uppercase rounded-full bg-teal-accent-400">
            Figma, Photoshop

            </p>
            </div>
<img src="/ekl.png" className="hidden lg:block md:block lg:h-26" alt="" />
<p className='block lg:hidden md:hidden text-xl font-bold text-cyan-400'>Job Application System</p>
      <p class="mt-2 mb-3 hidden md:block text-gray-400 ">A UI/UX Prototype of a Job Application and Employee Management System. The prototype includes dedicated dashboards for each user types, pages for job findings/applications and authentication pages. It also includes the administrator dashboard for managing users inside the application.</p>
      <button class="btn btn-md btn-neutral mt-2">Figma</button>
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

export default Sticky