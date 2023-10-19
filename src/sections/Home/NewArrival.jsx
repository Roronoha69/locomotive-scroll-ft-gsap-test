import './Home.scss'
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, {  useLayoutEffect, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import images from "../../assets/image";
import videoGolf from "../../assets/video/real-vid3.mp4"

 



const NewArrival = (params) => {
 
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
 
  const [imgLoad, setImgLoad] = useState(false)
  const [imgLoad2, setImgLoad2] = useState(false)
  const [imgLoad3, setImgLoad3] = useState(false)

  const [videoGo, setVideoGo] = useState(false)

  const videoRef = useRef(null);
  
  useEffect(()=>{
    if (params.loaderOff){
        setTimeout(()=>{
            setImgLoad(true)
        }, 1450)
        setTimeout(()=>{
            setImgLoad2(true)
        }, 1150)
        setTimeout(()=>{
            setImgLoad3(true)
        }, 850)
    }
  })
  const [progress, setProgress] = useState(0.35); // initialisation de la propriété "progress" à 0 avec un state Hook
  const [progressH, setProgressH] = useState(0.55); // initialisation de la propriété "progress" à 0 avec un state Hook
  const [progress2, setProgress2] = useState(0.90); // initialisation de la propriété "progress" à 0 avec un state Hook
  const [progressH2, setProgressH2] = useState(0.75); // initialisation de la propriété "progress" à 0 avec un state Hook
  const [progressM, setProgressM] = useState(0)

  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  // const ref2 = useRef(null);

  const ScrollingRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    // let element2 = ref2.current;

    let scrollingElement = ScrollingRef.current;
    let t1= gsap.timeline();

    setTimeout(() => {
      let mainHeight = scrollingElement.scrollHeight;
      element.style.height = `calc(${mainHeight / 4}px)`;
      // element2.style.height = `calc(${mainHeight / 4}px)`;

      t1.to(element, {
        
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: 'bottom+=100% top-=100%',
          scroller: '.App', //locomotive-scroll
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            
              videoRef.current.play()
          
            
            // Mettre à jour la variable "progress"
          
            if (self.progress < 0.75) {
              setProgress(self.progress+0.35);
            }
            
            if (self.progress < 0.25) {
              setProgress2(self.progress+0.90);
            }
            if (self.progress < 0.7) {
              setProgressH(self.progress+0.55);
            } 

            if (self.progress < 0.7) {
              setProgressH2(self.progress+0.75);
            } 
            
                                 
          },
          // markers: true,
          
        },  
      });
      

      ScrollTrigger.refresh();
      
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  function handleClic(e) {
    e.preventDefault();
  }

  return (
    <Section  ref={ref} id="fixed-target" className="new-arrival">
     

     
       
      {/* <div className="wrapper2" ref={ScrollingRef} style={{width:`${progress*100}vw`, height:`${progressH*100}vh`}}></div> */}
       
          <div className='test'>
           <motion.div className={`img-container`}

           style={{ marginRight:-(progress*180)*1.3,  marginLeft:-(progress*180)*1.3}}          
            >
                <div className='box-img responsive-eraser'>
                    <motion.div
                    // animation de fin vers le bas ( les img on pas toutes le meme delay et transition)
                    animate={{y:imgLoad? 0:-250}}
                    transition={{delay: 0.9,duration:0.4, ease:"easeInOut"}}
                    >
                    <motion.img 
                    preload="auto"  
                    // animation scale et opacity et delay en fonction de setTimeout()
                    src={images.img24}
                    className={`${imgLoad? "":"invisible-img"}`}
                    animate={{scale:imgLoad? 1:0.7, opacity:imgLoad?1:0.7}}
                    transition={{duration:0.4, ease:"easeInOut"}}
                    />
                    </motion.div>
                </div>

                <div className='box-img responsive-eraser'                                 
                >
                    <motion.div
                    animate={{y:imgLoad? 0:-250}}
                    transition={{delay: 0.8,duration:0.4, ease:"easeInOut"}}
                    >
                <motion.img 
                preload="auto"  
                    src={images.img23}
                    className={`${imgLoad2? "":"invisible-img"}`}
                    
                    animate={{scale:imgLoad2? 1:0.7, opacity:imgLoad2?1:0.7}}
                    transition={{duration:0.4, ease:"easeInOut"}}
                  
                    />
                    </motion.div>

                    <motion.div
                    animate={{y:imgLoad? 0:-250}}
                    transition={{delay: 0.7,duration:0.4, ease:"easeInOut"}}>
                    <motion.img 
                    preload="auto"  
                    src={images.img21}
                    className={`${imgLoad3? "":"invisible-img"}`}
                    
                    animate={{scale:imgLoad3? 1:0.7, opacity:imgLoad3?1:0.7}}
                    transition={{duration:0.5, ease:"easeInOut"}}
                    /></motion.div>
                </div>



               <div  ref={ScrollingRef}
                    className='box-img'>
                    <motion.div
                      animate={{y: imgLoad ? 0 : -320}}
                      transition={{delay: 0.4, duration: 0.4, ease: "easeInOut"}}
                    >

                      <motion.video                     
                        ref={videoRef}
                        style={{width:window.innerWidth < 750? `${progress2*100}vw` : `${progress*100}vw` , height:window.innerWidth < 750? `${progressH2*100}vh` : `${progressH*100}vh`, objectFit:"cover"}}
                        src={videoGolf}
                        className={`${imgLoad3 ? "" : "invisible-img"}`} 
                        preload="auto"                    
                        muted
                        onClick={(e)=> handleClic(e)}
                        loop
                        poster={images.img4}
                        animate={{scale: imgLoad3 ? 1 : 0.7, opacity: imgLoad3 ? 1 : 0.7}}
                        transition={{duration: 1, ease: "easeInOut"}}
                      />
                    </motion.div>
    </div>
                   
                    {/* <div 
              
                // style={{width:`${progress*100}vw`, height:`${progressH*100}vh`}}
                className='box-img'>
                    <motion.div
                    animate={{y:imgLoad? 0:-320}}
                    transition={{delay: 0.4,duration:0.4, ease:"easeInOut"}}
                    >
                    
                <motion.img 
                style={{width:`${progress*100}vw`, height:`${progressH*100}vh`, objectFit:"cover"}}
                    src={images.car}
                    className={`${imgLoad3? "":"invisible-img"}`}
                    
                    animate={{scale:imgLoad3? 1:0.7, opacity:imgLoad3?1:0.7}}
                    transition={{duration:1, ease:"easeInOut"}}
                    /></motion.div>
                </div>
           */}

                






                <div className='box-img responsive-eraser'>
                <motion.div
                animate={{y:imgLoad? 0:-250}}
                transition={{delay: 0.6,duration:0.4, ease:"easeOut"}}>
                <motion.img 
                preload="auto"  
                    src={images.img22}
                    className={`${imgLoad3? "":"invisible-img"}`}
                    
                    animate={{scale:imgLoad3? 1:0.7, opacity:imgLoad3?1:0.7}}
                    transition={{duration:0.5, ease:"easeInOut"}}
                    /></motion.div>
                    <motion.div 
                    animate={{y:imgLoad? 0:-250}}
                    transition={{delay: 0.5,duration:0.4, ease:"easeInOut"}}>
                    <motion.img 
                    preload="auto"  
                    src={images.img20}
                    className={`${imgLoad2? "":"invisible-img"}`}
                    
                    animate={{scale:imgLoad2? 1:0.7, opacity:imgLoad2?1:0.7}}
                    transition={{duration:0.4, ease:"easeInOut"}}
                    /></motion.div>
                    
                </div>
                <div className='box-img responsive-eraser'>
                    <motion.div
                    animate={{y:imgLoad? 0:-250}}
                    transition={{delay: 0.4,duration:0.4, ease:"easeInOut"}}>
                <motion.img 
                preload="auto"  
                    src={images.img25}
                    className={`${imgLoad? "":"invisible-img"}`}
                    
                    animate={{scale:imgLoad? 1:0.7, opacity:imgLoad?1:0.7}}
                    transition={{duration:0.4, ease:"easeInOut"}}
                    /></motion.div>
        
                </div>
            </motion.div>
          </div>


        
       {/* <Container >
        <Photos img={img1} name="Denim" />
        <Photos img={img2} name="Cool Dresses" />
        <Photos img={img3} name="Jackets" />
        <Photos img={img4} name="T-shirts" />
      </Container> */}

     
    </Section>
  );
};





const Section = styled.section`
  min-height: 100vh;
  /* height: auto; */
  width: 100%;
  margin: 0 auto;
 
  
 
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
 
`;




export default NewArrival;
