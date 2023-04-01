import "locomotive-scroll/dist/locomotive-scroll.css";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import NewArrival from "./sections/Home/NewArrival";
import './App.scss'
import Galery from './sections/Galery/Galery'
import Header from './sections/Header/About'
import Marquee from "./sections/Marquee"
import Loader from "./sections/Loader/Loader"
import Footer from "./sections/Footer/Footer";
import Infos from "./sections/Infos/Infos";


function App() {
  // useLocoScroll();

  


  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const containerRef = useRef(null);
  const [Loaded, setLoaded] = useState(false);

 function updateData(data) {
    setLoaded(data);
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoaded(true);
  //   }, 3000);
  // }, []);

  return (
    <>
 
        <LocomotiveScrollProvider
          options={{
            smooth: true,

            multiplier: 0.85,

            // ... all available Locomotive Scroll instance options
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          {/* <AnimatePresence>{Loaded ? null : <Loader />}</AnimatePresence> */}
          <main className="App old" data-scroll-container ref={containerRef}>
            <ScrollTriggerProxy />
            
               {Loaded ? 
               <motion.div
               initial={{ y: windowSize.current[1]+10 }}
               animate={{ y: 0 }}
               transition={{delay:0, duration: 0.8, ease: [0.95, 0.01, 0.95, 0.95] }}
               style={{backgroundColor: "#ebeae1"}}
               >
               <Header key="head" />
              <NewArrival key="new arrival" loaderOff={true} />
              <Galery key="galery"/> 
              <Infos key="infos" />
              <Footer key="footer"/> 
              </motion.div>
              : <Loader updateData={updateData} />} 

              {/* <Home key="home" /> */}
              
          

             
              {/* <Shop key="Shop" /> */}
              {/* <Marquee key="marquee" /> */}
              
              {/* <Footer key="Footer" />  */}
              
             
          </main>
        </LocomotiveScrollProvider>
      
    </>
  );
}

export default App;
