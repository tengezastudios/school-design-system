import React from 'react'; 
import '../../styles/style.scss';

/*
 d is a string containing a series of path commands that define
  the outline shape of the glyph it is unique for every svg image/icon.

*/
export const Button = ({cls, children, border, fn, icon, clsIcon, iconStroke, d}) => (
    <div className="interactive_focus" style={{border: border}}>
        <div className={cls} onClick={() => fn()}>
            <svg 
              className={clsIcon}  
              style={{
                  display: {icon}
              }}
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                <path 
                    d={d} 
                    stroke={iconStroke}
                    stroke-linecap="round" 
                    stroke-linejoin="round"/>
                </svg>

        {children}
        </div>
    </div>
    
)
