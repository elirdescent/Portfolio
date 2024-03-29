import React from "react";
import { Element } from "react-scroll";

const Work = () => {
    return(

<Element name="work">
    <div class="container px-6 py-10 mx-auto ">
    <div className=" mx-auto p-5" id='work'>
            <div className="pb-8 text-center ">
                <p className="text-4xl mb-3 font-bold  bg-gradient-to-b from-purple-600  to-cyan-400  text-transparent bg-clip-text">My Projects</p>
                <p className="text-gray-400">Check out some of my recent work</p>
            </div>



        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
            <div class="w-full ">
                
            <div class="relative w-full h-64  rounded-lg ">
    <button type="button" class="absolute top-0 left-0 z-10 btn-circle m-5 transition ease-in-out delay-150 bg-purple-500 hover:-translate-y-1 hover:scale-110  hover:opacity-100 hover:bg-purple-700 duration-150 mb-2">
        <p class="text-xl font-bold text-white">⋮</p>
    </button>
    <img class="relative z-0" className="opacity-40 rounded-lg grayscale" src="/g2g.png" alt="" />
</div>

                <div className="">
                <h1 class="w-56 h-2 mt-4 font-bold text-xl text-purple-700 ">GRUB2GO</h1>
                <p class=" h-2 mt-4 text-neutral-400 ">HTML, CSS, JavaScript, PHP</p>

                </div>
                
            </div>
            

            <div class="w-full ">
                <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                
                <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div class="w-full ">
                <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                
                <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div class="w-full ">
                <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                
                <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div class="w-full ">
                <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                
                <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div class="w-full ">
                <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                
                <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div class="w-full ">
                <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                
                <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div class="w-full ">
                <div class="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                
                <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>
        </div>
    </div>

        </div>
        </Element>
    )
}

export default Work