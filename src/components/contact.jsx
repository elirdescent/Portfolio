import React, {useEffect} from "react";
import Lottie from "lottie-react";
import animationData from "./gradient2.json";
import { Element, Link } from "react-scroll";
import Aos from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {
    useEffect(()=>{
        Aos.init({duration: 500});
      }, []);
    return(

<Element name="contact">
<div class=" py-12" data-aos="fade-in">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
            <h2 class="text-base text-purple-800 font-semibold tracking-wide uppercase">Contact</h2>
            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-cyan-500 to-indigo-400  text-transparent bg-clip-text sm:text-4xl">
             Let's get in touch!
            </p>
            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
             Feel free to contact me through:
            </p>
        </div>

        <div class="mt-10 ml-0 lg:ml-64 md:ml-0">
            <div class=" md:space-y-0 md:grid justify-center md:grid-cols-2 md:gap-x-8 md:gap-y-10">
               

                <div class="flex">
                    <div class="flex-shrink-0">
                        <div class="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                        
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>

                        </div>
                    </div>
                    <div class="ml-4 mb-2">
                        <dt class="text-lg leading-6 font-bold text-purple-400">
                            Phone Number
                        </dt>
                        <dd class=" text-base text-gray-500">
                            (+383) 49-119-946
                        </dd>
                    </div>
                </div>

                <div class="flex">
                    <div class="flex-shrink-0">
                        <div class="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                       
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>

                        </div>
                    </div>
                    <div class="ml-4 ">
                        <dt class="text-lg leading-6 font-bold text-purple-400">
                            Email
                        </dt>
                        <dd class=" text-base text-gray-500">
                            elirdelshani@gmail.com
                        </dd>
                    </div>
                </div>

 
                </div>
            </div>
            </div>
        </div>
        <footer class="footer footer-center p-10 opacity-40  text-neutral-400">
  <aside>

    <p class="font-bold">
     Elird Elshani <br/> Made with <span className="text-cyan-400">ReactJS</span> 
    </p> 
    <p>Copyright © 2024 - All rights reserved</p>
  </aside> 

</footer>

   



        </Element>

   

    )
}

export default Contact