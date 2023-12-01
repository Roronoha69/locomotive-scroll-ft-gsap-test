// Taile 189 / 6.2
// Poid 73 
// POITRINE 93 
// Taille 74 
// Hanche 93 
// Pointure 44

import "./Infos.scss" 

import images from "../../assets/image";


function Infos() {
    return( 
        <div className="infos-page small">
                <div className="wrap-infos">
                    <div className="left-infos">
                        <h1>Measurements</h1>
                        <p className="fst">height : 188cm / 6.2ft</p>
                        <p>weight : 73kg / 162 lbs</p>
                        <p>chest : 93cm</p>
                        <p>waist : 74cm</p>
                        <p>hips : 93cm</p>
                        <p className="lst">shoe size : 43FR</p>
                    </div>
                    <div className="right-infos">
                        <img className="snd" src={images.img26} alt="" />
                        <img className="fst" src={images.img21} alt="" />
                    </div>
                </div>
        </div>
    )
}

export default Infos;
