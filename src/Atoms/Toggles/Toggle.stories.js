import React, { useState } from "react";
import {Toggle} from '../Toggles/Toggle';
import '../../styles/style.scss';
import { motion } from 'framer-motion';



export default {
  title: 'Toggles',
  component: Toggle
};

const variantsToggle = {
    off: { right: "15px",
           
    },
    on: { 
        right: 0
    },
    offBig: {
        right: '24px'
    },
    backgroundOn: {
        backgroundColor: '#2662D9'
    },
    backgroundOff: {
        backgroundColor: '#B3B3B3'
    }
  }


// toggle big off base 
export const ToggleBigBaseAnimated = () => {
    const [isToggled, setToggle] = useState(false);
    return (
    <Toggle cls="toggle-and-label-container">
        <span className="toggle-label">Toggle label</span>
        <motion.div className="toggle-container-off"
            animate={isToggled ? "backgroundOn" : "backgroundOff"}
            variants={variantsToggle}
        >
            <motion.div className="toggle-button-off" 
             onClick={() => setToggle(!isToggled)}
             animate={isToggled ? "on" : "offBig"}
             variants={variantsToggle}
            ></motion.div>
        </motion.div>
    </Toggle>);
}

// toggle small off base 
export const ToggleSmallBaseAnimated = () => {
    const [isToggled, setToggle] = useState(false);
    return (
        <Toggle cls="small-toggle-and-label-container">
            <span className="small-toggle-label">Toggle label</span>
            <motion.div className="small-toggle-container-off"
                animate={isToggled ? "backgroundOn" : "backgroundOff"}
                variants={variantsToggle}>
               <motion.div className="small-toggle-button-off" id="toggle-button"
                onClick={() => setToggle(!isToggled)}
                animate={isToggled ? "on" : "off"}
                variants={variantsToggle}
                 ></motion.div>
            </motion.div>
        </Toggle>);
}


