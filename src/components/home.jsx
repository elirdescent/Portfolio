import React, {useEffect, useRef} from 'react'
import { motion, useInView, useAnimation } from "framer-motion";
import { ReactTyped } from "react-typed";
import Header from './components/header';
import Navbar from './components/navbar';

import Skills from './components/skills';
import About from './components/about';

const Home = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});
  
    const mainControls = useAnimation();
  
    useEffect(() => {
      if(isInView)
      {
        mainControls.start("visible");
  
      }
    }, [isInView]);
    return(
        <motion.div 
          variants={{
            hidden: {opacity:0, y:75},
            visible: {opacity:1, y:0},
          }}
          initial="hidden"
          animate="visible"
          transition={{duration:0.5, delay:0.25}}>
        <Navbar/>
        <Header/>
        <About/>
    </motion.div>
        

    )
}

export default Home