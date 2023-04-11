import SplashScreen from "../components/SplashScreen.js"
import { useState } from "react";

const LandingPage = () => {
    const [visible, setVisible] = useState(true);
    return(
        <div>
            <SplashScreen isVisible={visible}/>
            <button onClick={() => setVisible(!visible)}/>
        </div>
    )
}

export default LandingPage;