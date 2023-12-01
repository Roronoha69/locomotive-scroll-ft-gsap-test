import React, {useRef, useState, useEffect, useLayoutEffect} from "react";
import {motion} from 'framer-motion'
import './Header.scss'
import { Howl } from 'howler';
import logo from "../../assets/img/t.png"

import musiqueRef from "../../assets/video/music.mp3"

import on from "../../assets/img/on.png"

import off from "../../assets/img/off.png"


const Header = () => {
  
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  // useEffect(() =>{
  //   if (window.innerWidth <= 1000) {
  //    setAutoPlay(true)
  //    const sound = new Howl({
  //     src: musiqueRef,
  //     volume: 0.2,
  //     autoplay: true,
  //     onplay: () => setPlaying(true),
  //     onpause: () => setPlaying(false),
  //     onend: () => setPlaying(false),
  //   });
  //   }
  //   if (window.innerWidth > 1000 ) {
  //     setAutoPlay(false)
  //   }
     
  //  }, [])


  useEffect(()=>{
    if (window.innerWidth >= 1000) {
      audioRef.current.play()
      setPlaying(true)
    }
  }, [])

  const togglePlaying = () => {
    const audio = audioRef.current

    if(playing){
      audioRef.current.pause()
      setPlaying(false);
      console.log("put1");
      console.log(playing);
    }
    if(!playing){
      audio.play()
      console.log("put");
    }
    

     setPlaying(!playing);
  };

  return (
   
      <div id='scroll-target' className="header-all">
    <motion.div className="nav"   
          
    initial={{opacity: 0}}
    animate={{opacity:1}}
    transition={{delay:1.2, duration: 0.5}}
    >
        <div className="logo">
      <img src={logo} alt="" />
          
        </div>

        
        <div className="infos">
        <audio ref={audioRef} src={musiqueRef} />
         
         {
          playing?  
          <img onClick={()=> togglePlaying()} src={on} alt="" /> :
          <img onClick={()=> togglePlaying()} src={off} alt="" />
         }
                              
          <p className="underline">thaislutton@live.fr</p>
        </div>

        <div className="infos-tgl">
            {/* <img src={menu} alt="" /> 
                        <p>Contact 📨</p>

            */}
            <p>thaislutton@live.fr</p>
        </div>
    </motion.div>

    <div className="header-text">
      <motion.h1 className="big"
      initial={{y:-150, opacity:0}}
      animate={{y:0, opacity:1}}
      transition={{delay:2.2, duration: 0.5, ease:"easeOut"}}
      >
          THAÏS LUTTON
      </motion.h1>
      <motion.p
      initial={{y:-50, opacity:0}}
      animate={{y:0, opacity:1}}
      transition={{delay:2.4, duration: 0.8, ease:"easeOut"}}
      >
        Welcome to my book, it’s Thaïs. 
            I am a <b>french model based in Paris.</b><b></b> <b></b>Let's create magic together.</motion.p>

    </div>
    </div>
   
  );
};

//



export default Header;
