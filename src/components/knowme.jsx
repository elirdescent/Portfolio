import  React, {useEffect} from "react";
import Lottie from "lottie-react";
import animationData from "./astro.json";
import { Element } from "react-scroll";
import Aos from 'aos';
import 'aos/dist/aos.css';

const More = () => {
    useEffect(()=>{
        Aos.init({duration: 500});
      }, []);
    return(
        <Element name="skills">
    <div>
        <header>
            <input type="checkbox" name="hbr" id="hbr" class="hbr peer" hidden aria-hidden="true"/> 
         
        </header>
        
        <div class=" relative  pb-20 pt-10 ">
            <div class="relative xl:container m-auto px-6 md:px-12 lg:px-6" data-aos="fade-down" data-aos-duration="1500" >
                <h1 class="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl text-white">Get to know me <br class="lg:block hidden"/> <span class="relative text-transparent bg-gradient-to-r from-purple-600 via-cyan-500 to-indigo-400  text-transparent bg-clip-text">and my skills</span>.</h1>
                <div class="lg:flex">
                    <div class="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
                        <p class="sm:text-lg text-gray-400 lg:w-11/12">
                        Starting out as a graphic designer, I got into programming around the end of high school, and ever since then I've been able to learn advanced OOP and these full stack technologies::
                        </p>
                        <span class="block font-semibold text-gray-400 text-gray-400">My favorite technologies: </span>
                        <div class="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                            <div aria-label="add to slack" href="#" class="p-4   bg-purple-950  rounded-full duration-300  hover:shadow-lg hover:shadow-purple-600/20 ">
                                <div class="flex justify-center space-x-4">
                                    <img class="w-6 h-6" src="/Laravel1.png" alt="slack logo" loading="lazy" width="128" height="128"/>
                                    <span class="hidden font-medium md:block text-white">Laravel</span>
                                </div>
                            </div>    
                            <div aria-label="add to slack" href="#" class="p-4   bg-purple-950 border-gray-700 rounded-full duration-300 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-600/20 ">
                                <div class="flex justify-center space-x-4">
                                    <img class="w-10 h-6" src="/php.png" alt="slack logo" loading="lazy" width="128" height="128"/>
                                    <span class="hidden font-medium md:block text-white">PHP</span>
                                </div>
                            </div>     
                            <div aria-label="add to slack" href="#" class="p-4 bg-purple-950 rounded-full duration-300 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-600/20 ">
                                <div class="flex justify-center space-x-4">
                                    <img class="w-6 h-6" src="/java.png" alt="slack logo" loading="lazy" width="128" height="128"/>
                                    <span class="hidden font-medium md:block text-white">Java</span>
                                </div>
                            </div> 
                            
                             
                            
                        </div>

                        <div class="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                            <div aria-label="add to slack" href="#" class="p-4   bg-purple-950  rounded-full duration-300  hover:shadow-lg hover:shadow-purple-600/20 ">
                                <div class="flex justify-center space-x-4">
                                    <img class="w-6 h-6" src="/sql.png" alt="slack logo" loading="lazy" width="128" height="128"/>
                                    <span class="hidden font-medium md:block text-white">MySQL</span>
                                </div>
                            </div>    
                            <div aria-label="add to slack" href="#" class="p-4   bg-purple-950 border-gray-700 rounded-full duration-300 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-600/20 ">
                                <div class="flex justify-center space-x-4">
                                    <img class="w-6 h-6" src="/tailwind.png" alt="slack logo" loading="lazy" width="128" height="128"/>
                                    <span class="hidden font-medium md:block text-white">Tailwind</span>
                                </div>
                            </div>     
                            <div aria-label="add to slack" href="#" class="p-4  bg-purple-950 rounded-full duration-300 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-600/20 ">
                                <div class="flex justify-center space-x-4">
                                    <img class="w-8 h-6" src="/figma.png" alt="slack logo" loading="lazy" width="128" height="128"/>
                                    <span class="hidden font-medium md:block text-white">Figma</span>
                                </div>
                            </div> 
                            
                             
                            
                        </div>

                        
    
                        <div class="block font-semibold text-gray-400">
                          
                            <span>I also use:</span> 

                        </div>
    
                        <div class="pt-12 flex gap-6 lg:gap-12 justify-between  lg:w-2/3">
                            <img src="/js.png" class="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                            <img src="/react.webp" class="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                            <img src="/postman.png" class="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                            <img src="/git.png" class="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                            <img src="/ps.png" class="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                        </div>
                    </div>
                    <div class="mt-12 md:mt-0 lg:absolute -right-10 lg:w-7/12">
                        <div class="relative w-full">
                            <div aria-hidden="true" class="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-b from-black to-purple-700 blur-3xl"></div>
          
                           <Lottie animationData={animationData} className="hidden lg:block md:block "></Lottie>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </Element>
    
    )
}

export default More