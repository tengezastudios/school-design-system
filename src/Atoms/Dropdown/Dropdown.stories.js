import React from 'react';
import '../../styles/style.scss';
import { Dropdown } from './Dropdown';

import { motion } from 'framer-motion'; 

export default {
  title: 'Dropdown',
  component: Dropdown
};

const tween = {
    type: "tween",
    delay: "0",
    duration: "2",
    ease: [0.44, 0, 0.56, 1]
}

// Dropdown Base
export const DropdownBase = () => {
    const [dropOpen, setDrop] = React.useState(false);
    const [optionSelected, setOption] = React.useState('Placeholder');
    return (
        <Dropdown cls="dropdown-base">  
            <p className="dropdown-label">Dropdown label</p>
            <div className="dropdown-picker" onClick={() => {
                dropOpen ? setDrop(false) : setDrop(true)
            }}>
                <span className="choice">{optionSelected}</span>
                <svg className="icon-down" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="#1A1A1A" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </div>
            <motion.div initial={{ display: !dropOpen ? 'flex' : 'none'}} transition={tween} animate={{ display: dropOpen ? 'flex' : 'none'}} className="dropdown-list">
                <div className="option" onClick={() => {
                    setOption('Option 1')
                    setDrop(false)
                }}><span >Option 1</span></div>
                <div className="option" onClick={() => {
                    setOption('Option 2')
                    setDrop(false)
                }}><span >Option 2</span></div>
                <div className="option" onClick={() => {
                    setOption('Option 3')
                    setDrop(false)
                }}><span >Option 3</span></div>
            </motion.div>
        </Dropdown>
)};

//Dropdown Error
export const DropdownError = () => (
    <Dropdown cls="dropdown-base">  
        <p className="dropdown-label">Dropdown label</p>
        <div className="dropdown-picker error">
            <span className="choice">Placeholder 1</span>
            <svg className="icon-down" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 10L12 6" stroke="#1A1A1A" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
        </div>
        <small className="small-error-text">Wrong option</small>
    </Dropdown>
);

//Dropdown Disabled
export const DropdownDisabled = () => (
    <Dropdown cls="dropdown-base">  
        <p className="dropdown-label">Dropdown label</p>
        <div className="dropdown-picker disabled">
            <span className="choice disabled-text">Placeholder 1</span>
            <svg className="icon-down icon-down-disabled" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 10L12 6" stroke="#1A1A1A" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
        </div>
    </Dropdown>
);
