import React, {useRef, useState, useEffect} from "react";
import { motion , useViewportScroll, useTransform} from "framer-motion";
import './Loader.scss'
import  {useFollowPointer} from "../use-follow-pointer.ts";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import LocomotiveScroll from "locomotive-scroll";


 const Loader = ({updateData }) => {
  const [loaderOff, setLoaderOff] =useState(false)
  const [exitAnim, setExitAnim] =useState(false)
  const containerRef = useRef(null);

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    if (window.innerWidth < 1000) {
      setTimeout(()=>{
        setLoaderOff(true)
      }, 2000)
      setTimeout(()=> {updateData(true)}, 2500)  
    }
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setTimeout(()=>{
          setLoaderOff(true)
        }, 2000)
        setTimeout(()=> {updateData(true)}, 2500)  
      }
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
        
      });
    };

    window.addEventListener("resize", handleResize);

    // nettoyer l'événement de redimensionnement lorsque le composant est démonté
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {

    function handleMouseMove() {
      setAnimCursor(true);
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const ref = useRef(null);
   
    
    const { x, y } = useFollowPointer(ref !== 0 ? ref : 1000);    

    const [animCursor, setAnimCursor] = useState(false)
  
    


  return (
    <>
 
      <div className="Loader" 
      // id="main-container"
      // data-scroll-container
      //ref={ref2} 
      
      onClick={()=> {
        setTimeout(()=> {setExitAnim(true)}, 500)
         setLoaderOff(true)
         setTimeout(()=> {updateData(true)}, 500)  
      }
        
        }
      >
          
      <motion.div  
      className="voile"
      style={{ height: "100vh", width: "100vw"}}
      initial={{ background: "#ebeae1",  y: -windowSize.current[1]-10 }}
      animate={{ background: "black",  y:0}}
      transition={{delay:0.5, duration: 0.8, ease: [0.95, 0.01, 0.95, 0.95] }}
    
      >
      </motion.div>
  
      <motion.div className="text big"
      animate={{ scale: 1.1, color: "#ebeae1", opacity: loaderOff? 0 : 1}}
      transition={{delay: loaderOff? 0 : 1.2, duration: 0.5 }}
      >
       
          THAÏS LUTTON
      </motion.div>
  
      <motion.div 
      ref={ref}
      className={`box ${animCursor? "":"invisible"}`}
      initial={{opacity: 0, y: -windowSize.current[1]-10}}
      animate={{ x, y, opacity:loaderOff? 0 : 1, scale:1.5 }}
      transition={{
        
        type: "spring",
        damping: 12,
        stiffness: 100,
        restDelta: 0.001
      }}
      >
         <span>ENTER</span> 
      </motion.div>
      </div>
  


      
  
    
    </>
  );
  
};

export default Loader;
