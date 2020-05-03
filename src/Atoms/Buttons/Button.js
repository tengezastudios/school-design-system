import React from 'react';
import '../../styles/style.scss';

export const Button = ({cls, children, border, fn, icon, clsIcon, iconStroke}) => (
    <div className="interactive_focus" style={{border: border}}>
        <div className={cls} onClick={() => fn()}>
        <svg style={{display: icon}} className={clsIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 18L9 12L15 6" stroke={iconStroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {children}
        </div>
    </div>
    
)