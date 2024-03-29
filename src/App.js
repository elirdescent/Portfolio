import React, {useEffect} from 'react';
import Header from './components/header';
import Navbar from './components/navbar';
import { motion } from "framer-motion";
import About from './components/about';
import Work from './components/work';
import Navbar2 from './components/newnavbar';
import More from './components/knowme';
import Contact from './components/contact';
import Sticky from './components/sticky';
import ScrollToTop from 'react-scroll-up';


function App() {
 
  return (
    <div className="App "> 
  
   <Navbar2/>
   <Header/>
   <More/>
   <About/>
  
   <Sticky/>
   <Contact/>
   <ScrollToTop showUnder={160}>
   <svg className='h-10 bg-black bg-opacity-30 rounded-full' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 6V18M12 6L7 11M12 6L17 11" stroke="#c800ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
</ScrollToTop>
 

    </div>
  );
}

export default App;

