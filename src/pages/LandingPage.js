import SplashScreen from "../components/SplashScreen.js";
import DesignedBy from "../components/DesignedBy.js";
import ryanPortrait from "../Photos/ryanPortrait.jpg";
import "./LandingPage.css";
import { useState } from "react";

//ADVENTURES await the DARING soul
const LandingPage = () => {
    const [visible, setVisible] = useState(true);
    return (
        <div>
            <DesignedBy />
            <div className="green-section">
                <div className="first-body">
                    <div className="first-line">
                        <h1 className="big-text" style={{display:"inline-block"}}>Adventures</h1>
                        <div className="link-box">
                            <a href="https://vsco.co/timothy-fang/gallery" className="link" target="_blank">VSCO &#x2197;</a>
                            <a href="https://www.linkedin.com/in/timothy-s-fang/" className="link" target="_blank">LINKEDIN &#x2197;</a>
                        </div>
                    </div>
                    <h1 className="medium-text">await the</h1>
                    <h1 className="big-text">Daring</h1>
                    <div className="image-text">
                        <img src={ryanPortrait} alt="" className="image-box" />
                        <h1 className="medium-text" style={{ paddingLeft: "25px" }}>soul</h1>
                    </div>
                </div>

            </div>

            <div className="tan-section">
                <div className="second-body">
                    <div className=""></div>
                </div>
            </div>
            {/* <SplashScreen isVisible={visible}/>
            <button onClick={() => setVisible(!visible)}/> */}
        </div>
    )
}

export default LandingPage;