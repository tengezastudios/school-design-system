import React from 'react';
import {Toggle} from '../Toggles/Toggle';
import '../../styles/style.scss';

export default {
  title: 'Toggles',
  component: Toggle
};

// toggle big off base 
export const ToggleBigOffBase = () => (
<Toggle cls="toggle-and-label-container">
    <span className="toggle-label">Toggle label</span>
    <div className="toggle-container-off">
        <div className="toggle-button-off"></div>
    </div>
</Toggle>);

// toggle big on base 
export const ToggleBigOnBase = () => (
    <Toggle cls="toggle-and-label-container">
        <span className="toggle-label">Toggle label</span>
        <div className="toggle-container-on">
            <div className="toggle-button-on"></div>
        </div>
    </Toggle>);


// toggle small off base 
export const ToggleSmallOffBase = () => (
<Toggle cls="small-toggle-and-label-container">
    <span className="small-toggle-label">Toggle label</span>
    <div className="small-toggle-container-off">
        <div className="small-toggle-button-off"></div>
    </div>
</Toggle>);

// toggle small on base 
export const ToggleSmallOnBase = () => (
    <Toggle cls="small-toggle-and-label-container">
        <span className="small-toggle-label">Toggle label</span>
        <div className="small-toggle-container-on">
            <div className="small-toggle-button-on"></div>
        </div>
    </Toggle>);


