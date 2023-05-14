// Taile 189 / 6.2
// Poid 73 
// POITRINE 93 
// Taille 74 
// Hanche 93 
// Pointure 44

import "./Infos.scss" 
import img1 from "../../assets/img/img1.jpg"
import img2 from "../../assets/img/img2.jpg"
import images from "../../assets/image";


function Infos() {
    return( 
        <div className="infos-page small">
                <div className="wrap-infos">
                    <div className="left-infos">
                        <h1>Measurements</h1>
                        <p className="fst">height : 189cm / 6.2ft</p>
                        <p>weight : 73kg / 162 lbs</p>
                        <p>chest : 93cm</p>
                        <p>waist : 74cm</p>
                        <p>hips : 93cm</p>
                        <p className="lst">shoe size : 44FR</p>
                    </div>
                    <div className="right-infos">
                        <img className="snd" src={images.img14} alt="" />
                        <img className="fst" src={images.img15} alt="" />
                    </div>
                </div>
        </div>
    )
}

export default Infos;