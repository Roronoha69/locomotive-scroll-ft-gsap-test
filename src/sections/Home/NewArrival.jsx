import './Home.scss'
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, {  useLayoutEffect, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import images from "../../assets/image";






const NewArrival = (params) => {
  const [imgLoad, setImgLoad] = useState(false)
  const [imgLoad2, setImgLoad2] = useState(false)
  const [imgLoad3, setImgLoad3] = useState(false)
  
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
  const [progress, setProgress] = useState(0.3); // initialisation de la propriété "progress" à 0 avec un state Hook
  const [progressH, setProgressH] = useState(0.5); // initialisation de la propriété "progress" à 0 avec un state Hook

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
            // Mettre à jour la variable "progress"
            console.log(self.progress);
            if (self.progress < 0.8) {
              setProgress(self.progress+0.3);
            }
            if (self.progress < 0.8) {
              setProgressH(self.progress+0.5);
            }  
          },
          // markers: true,
        },  
      });
      
      

      // t1.to(element2, {
      //   scrollTrigger: {
      //     trigger: element2,
      //     start: 'top top',
      //     end: 'bottom+=100% top-=100%',
      //     scroller: '.App', //locomotive-scroll
      //     scrub: 1,
      //     pin: true,
      //     // markers: true,
      //   },
      //   scale: 1
      // });

      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section  ref={ref} id="fixed-target" className="new-arrival">
     

      <Title 
      //  ref={ref2}
        data-scrol data-scroll-direction="horizontal"
      >
        <p ></p>
      </Title>
       
      {/* <div className="wrapper2" ref={ScrollingRef} style={{width:`${progress*100}vw`, height:`${progressH*100}vh`}}></div> */}
       
          <div className='test'>
           <motion.div className={`img-container`}
            // style={{position: "sticky", top: 400}}
          

            >
                <div className='box-img'>
                    <motion.div
                    // animation de fin vers le bas ( les img on pas toutes le meme delay et transition)
                    animate={{y:imgLoad? 0:-250}}
                    transition={{delay: 0.9,duration:0.4, ease:"easeInOut"}}
                    >
                    <motion.img 
                    // animation scale et opacity et delay en fonction de setTimeout()
                    src={images.journal}
                    className={`${imgLoad? "":"invisible-img"}`}
                    animate={{scale:imgLoad? 1:0.7, opacity:imgLoad?1:0.7}}
                    transition={{duration:0.4, ease:"easeInOut"}}
                    />
                    </motion.div>
                </div>

                <div className='box-img'>
                    <motion.div
                    animate={{y:imgLoad? 0:-250}}
                    transition={{delay: 0.8,duration:0.4, ease:"easeInOut"}}
                    >
                <motion.img 
                    src={images.pic}
                    className={`${imgLoad2? "":"invisible-img"}`}
                    
                    animate={{scale:imgLoad2? 1:0.7, opacity:imgLoad2?1:0.7}}
                    transition={{duration:0.4, ease:"easeInOut"}}
                   
                    />
                    </motion.div>

                    <motion.div
                    animate={{y:imgLoad? 0:-250}}
                    transition={{delay: 0.7,duration:0.4, ease:"easeInOut"}}>
                    <motion.img 
                    src={images.pose2}
                    className={`${imgLoad3? "":"invisible-img"}`}
                    
                    animate={{scale:imgLoad3? 1:0.7, opacity:imgLoad3?1:0.7}}
                    transition={{duration:0.5, ease:"easeInOut"}}
                    /></motion.div>
                </div>




                <div 
              ref={ScrollingRef}
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






                <div className='box-img'>
                <motion.div
                animate={{y:imgLoad? 0:-250}}
                transition={{delay: 0.6,duration:0.4, ease:"easeOut"}}>
                <motion.img 
                    src={images.survet}
                    className={`${imgLoad3? "":"invisible-img"}`}
                    
                    animate={{scale:imgLoad3? 1:0.7, opacity:imgLoad3?1:0.7}}
                    transition={{duration:0.5, ease:"easeInOut"}}
                    /></motion.div>
                    <motion.div 
                    animate={{y:imgLoad? 0:-250}}
                    transition={{delay: 0.5,duration:0.4, ease:"easeInOut"}}>
                    <motion.img 
                    src={images.pose}
                    className={`${imgLoad2? "":"invisible-img"}`}
                    
                    animate={{scale:imgLoad2? 1:0.7, opacity:imgLoad2?1:0.7}}
                    transition={{duration:0.4, ease:"easeInOut"}}
                    /></motion.div>
                    
                </div>
                <div className='box-img'>
                    <motion.div
                    animate={{y:imgLoad? 0:-250}}
                    transition={{delay: 0.4,duration:0.4, ease:"easeInOut"}}>
                <motion.img 
                    src={images.golf}
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
  /* height: 300vh; */
  overflow: hidden !important;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  /* background-color: ${(props) => props.theme.text}; */
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;
  box-shadow: 0 0 0 5vw ${(props) => props.theme.text};
  border: 3px solid black;

  z-index: 11;

  @media (max-width: 70em) {
  width: 40vw;

    height: 80vh;
  }

  @media (max-width: 64em) {
  width: 50vw;
  box-shadow: 0 0 0 60vw ${(props) => props.theme.text};

    height: 80vh;
  }
  @media (max-width: 48em) {
  width: 60vw;

    height: 80vh;
  }
  @media (max-width: 30em) {
  width: 80vw;

    height: 60vh;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 25vw;
  height: auto;
  /* background-color: yellow; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
  width: 30vw;


  }
  @media (max-width: 48em) {
  width: 40vw;

  }
  @media (max-width: 30em) {
  width: 60vw;

  }
`;

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: 'Kaushan Script';
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.body};
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};

  position: absolute;
  top: 2rem;
  left: 1rem;
  z-index: 15;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};


  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  
  }
`;
const Text = styled.div`
  width: 20%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  top: 0;
  right: 0;
  z-index: 11;

  @media (max-width: 48em) {
    display: none;
  
  }
 
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;

  h2 {
  }

  img {
    width: 100%;
    height: auto;
    z-index: 5;
  }
`;

export default NewArrival;
