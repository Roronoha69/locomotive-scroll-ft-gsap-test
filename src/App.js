import "locomotive-scroll/dist/locomotive-scroll.css";
import { AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import NewArrival from "./sections/Home/NewArrival";
import './App.scss'
import Galery from './sections/Galery/Galery'

function App() {
  // useLocoScroll();
  const containerRef = useRef(null);
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  return (
    <>
 
        <LocomotiveScrollProvider
          options={{
            smooth: true,

            multiplier: 0.7,

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
              {/* {Loaded ? null : <Loader />} */}

              {/* <Home key="home" /> */}
              {/* <About key="about" /> */}
              <NewArrival key="new arrival" loaderOff={true} />
              <Galery />
{/*              
              <Shop key="Shop" />
              <Marquee key="marquee" />
              
              <Footer key="Footer" /> */}
          </main>
        </LocomotiveScrollProvider>
      
    </>
  );
}

export default App;
