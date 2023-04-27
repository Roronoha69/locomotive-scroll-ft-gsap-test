import './Footer.scss'
import {motion} from "framer-motion"

function Footer() {

return(
    <div className="footer">
    <a href='mailto:thaislutton@live.fr'>
        <motion.div 
         whileHover={{ scale: 1.02 }}
         whileTap={{ scale: 0.98 }}
         transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="small text">
            Let's work together
        </motion.div>
        </a>
        <div className="bottom">
            <div className="left">
                <p className="no-margin-b">© 2023</p>
                <p className="no-margin-t">MOTION & DEV BY <a href="https://www.linkedin.com/in/justin-mbodje-881243222/" target='_blank'>JUSTIN</a></p>
            </div>
            <div className="middle">
                <a href='https://www.instagram.com/thaislutton/' target='_blank'>Instagram</a>
            </div>
            <div className="right">
                <p>Scroll to top</p>
            </div>
        </div>
    </div>
 )
}

export default Footer