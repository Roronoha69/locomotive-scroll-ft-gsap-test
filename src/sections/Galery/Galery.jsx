import React, {useState, useEffect} from "react";
import {motion} from "framer-motion"
import './Galery.scss'
import images from "../../assets/image";

import image1 from "../../assets/img/Photo_site/1/1.jpg";

import image3 from "../../assets/img/3.jpg";






function Galery() {

    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
      });

      useEffect(() => {
        const handleResize = () => {
          setDimensions({
            height: window.innerHeight,
            width: window.innerWidth,
          });
        };
    
        window.addEventListener("resize", handleResize);
    
        // nettoyer l'événement de redimensionnement lorsque le composant est démonté
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    const [overed, isOvered] = useState(false)
    const [overed1, isOvered1] = useState(false)
    const [overed2, isOvered2] = useState(false)
    const [overed3, isOvered3] = useState(false)
    const [overed4, isOvered4] = useState(false)


     
    return(
        <div className="Galery">
            
            <div className="head-work">
            <h1 className="big-text"> (Selected Work)</h1>
           
            </div>


            <div className="wrap-all-img">
                <div className="work"
                    onMouseEnter={() => isOvered(true)}
                    onMouseLeave={() => isOvered(false)}
                >
                    
                    <div className="work-text">
                        <h1>GIVENCHY</h1> 
                        <span>2022</span>
                        <div className="img-effet-container">
                        <motion.img 
                         preload="auto"  animate={{scale: overed? 1.02 : 1}} className="img" src={image1} alt=""   />
                        </div>
                    </div>
                    <div className="work-attribute">
                        <p>COMMERCIAL</p>
                        <p>PHOTOSHOOT</p>
                    </div>
                </div>

                <div className="work-row">

                <div className="work-section nd"
                
                onMouseEnter={() => isOvered1(true)}
        onMouseLeave={() => isOvered1(false)}
                >
                        <div className="work-text">
                        <h1>Richard Leclert</h1> 
                        <span>2022</span>
                         <div className="img-effet-container2">
                        <motion.img  preload="auto"   animate={{scale: overed1? 1.02 : 1}}                      
                        className="img" src={images.survet} alt="" />
                        </div>
                    </div>
                    <div className="work-attribute">
                        <p>COMMERCIAL</p>
                        <p>PHOTOSHOOT</p>
                    </div>
                        </div>
                        <div className="work-section st"
                        
                        onMouseEnter={() => isOvered2(true)}
        onMouseLeave={() => isOvered2(false)}
                        >
                    <div className="work-text">
                        <h1>Govereal</h1> 
                        <span>2022</span>
                        <div className="img-effet-container2">
                        <motion.img  preload="auto"   animate={{scale: overed2? 1.02 : 1}} className="img" src={images.car} alt="" />
                        </div>
                    </div>
                    <div className="work-attribute">
                        <p>COMMERCIAL</p>
                        <p>PHOTOSHOOT</p>
                    </div>
                        </div>
                       
                </div>

                <div className="work-row">
                        <div className="work-section rd"
                        
                        onMouseEnter={() => isOvered3(true)}
                        onMouseLeave={() => isOvered3(false)}
                        >
                        <div className="work-text">
                        <h1>Sylvie Roumaine</h1> 
                        <span>2022</span>
                        <div className="img-effet-container2">

                        <motion.img  preload="auto"   animate={{scale: overed3? 1.02 : 1}} className="img" src={image3} alt="" />
                        </div>
                    </div>
                    <div className="work-attribute">
                        <p>COMMERCIAL</p>
                        <p>PHOTOSHOOT</p>
                    </div>
                        </div>
                        <div className="work-section th"
                        
                        onMouseEnter={() => isOvered4(true)}
                        onMouseLeave={() => isOvered4(false)}
                        >
                        <div className="work-text">
                        <h1>Monte-Carlo Golf</h1> 
                        <span>2022</span>
                        <div className="img-effet-container2">

                        <motion.img 
                         preload="auto"  
                        animate={{scale: overed4? 1.02 : 1}} className="img" src={images.golf} alt="" />
                        </div>
                    </div>
                    <div className="work-attribute">
                        <p>COMMERCIAL</p>
                        <p>PHOTOSHOOT</p>
                    </div>
                        </div>
                </div>



                
            </div>

            
          

           <div>

           </div>
        </div>
    )
}

export default Galery