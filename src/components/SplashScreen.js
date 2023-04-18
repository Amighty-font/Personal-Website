import { motion, AnimatePresence } from "framer-motion";
import "./SplashScreen.css"

const SplashScreen = ({ isVisible }) => {
    var name = "TIMOTHY FANG"
    var splash = []

    for (let i = 0; i < name.length; i++) {
        const time = isVisible ? i * 0.1 : 0;
        splash.push(
            <AnimatePresence>
                {isVisible && (<motion.div
                    class="letter"
                    key={i}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ opacity: 0, duration: time }}
                    transition={{ duration: time }}
                >
                    <span class="font-link">
                        {name[i]}
                    </span>
                </motion.div>)}
            </AnimatePresence>
        )
    }

    return (
        <div>
            <AnimatePresence>
            {isVisible && <motion.div 
                className="SplashContainer"
                key={1}
                // initial={{ x: 0, opacity: 1 }}
                // animate={{ x: 0, opacity: 1 
                exit={{ opacity: 0, duration: 3 }}
                >
                {splash}
            </motion.div>}
            </AnimatePresence>
        </div>
    )
}

export default SplashScreen;