import SplashScreen from "../components/SplashScreen.js";
import DesignedBy from "../components/DesignedBy.js";
import "./LandingPage.css";
import { useState } from "react";

//ADVENTURES await the DARING soul
const LandingPage = () => {
    const [visible, setVisible] = useState(true);
    return(
        <div>
            <DesignedBy />
            <div className="green-section">
                <div className="first-body">
                    <h1 className="big-text">Adventures</h1>
                    <h1 className="medium-text">await the</h1>
                    <h1 className="big-text">Daring</h1>
                    <h1 className="medium-text">soul</h1>
                </div>
            </div>

            <div className="tan-section"> HELLO </div>
            {/* <SplashScreen isVisible={visible}/>
            <button onClick={() => setVisible(!visible)}/> */}
        </div>
    )
}

export default LandingPage;