import React from 'react';
import '../../styles/style.scss';
import { Dropdown } from './Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown
};

// Dropdown Base
export const DropdownBase = () => (
        <Dropdown cls="dropdown-base">  
            <p className="dropdown-label">Dropdown label</p>
            <div className="dropdown-picker">
                <span className="choice">Placeholder 1</span>
                <svg className="icon-down" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="#1A1A1A" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </div>
            <div className="dropdown-list">
                <div className="option"><span >Option 1</span></div>
                <div className="option"><span >Option 2</span></div>
                <div className="option"><span >Option 3</span></div>
            </div>
        </Dropdown>
);

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
