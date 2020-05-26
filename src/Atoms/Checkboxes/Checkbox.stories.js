import React from 'react';
import {Checkbox} from '../Checkboxes/Checkbox';
import '../../styles/style.scss';

export default {
  title: 'Checkboxes',
  component: Checkbox
};


//Active unselected checkbox

export const UnselectedActive = () => (<Checkbox cls="unselected-checkbox" />);

//Disabled unselected checkbox 
export const UnselectedDisabled = () => (<Checkbox cls="unselected-checkbox unselected-checkbox-disabled" />);

//Active focused unselected checkbox
export const UnselectedActiveFocus = () => (<div className="unselected-checkbox-focus">
    <Checkbox cls="unselected-checkbox" />
    </div>);

//Disabled focused unselected checkbox
export const UnselectedDisabledFocus = () => (<div className="unselected-checkbox-focus">
    <Checkbox cls="unselected-checkbox unselected-checkbox-disabled" />
    </div>);    

//Active selected checkbox
export const SelectedActive = () => (
    <Checkbox cls="unselected-checkbox selected-container">
        <div style={{width: '6px', height: '6px'}} className="select-block">

        </div>
    </Checkbox>
    );    

//Focused selected checkbox
export const SelectedActiveFocus = () => (<div className="unselected-checkbox-focus">
     <Checkbox cls="unselected-checkbox selected-container">
        <div style={{width: '6px', height: '6px'}} className="select-block">

        </div>
    </Checkbox>
    </div>);    

//Disabled selected checkbox
export const SelectedDisabled = () => (
    <Checkbox cls="unselected-checkbox unselected-checkbox-disabled selected-container">
        <div style={{width: '6px', height: '6px'}} className="select-block-disabled">

        </div>
    </Checkbox>
    );   
    
//Disabled focused selected checkbox
export const SelectedDisabledFocus = () => (
    <div className="unselected-checkbox-focus">
<Checkbox cls="unselected-checkbox unselected-checkbox-disabled selected-container">
        <div style={{width: '6px', height: '6px'}} className="select-block-disabled">

        </div>
    </Checkbox>
    </div>

    
    );       


// checkbox selected active with indeterminate
export const SelectedActiveIndeterminate = () => (
    <Checkbox cls="unselected-checkbox selected-container">
        <div style={{width: '6px'}} className="select-line">

        </div>
    </Checkbox>
    );    
     
    
// checkbox selected focus indeterminate
export const SelectedActiveFocusIndeterminate = () => (
<div className="unselected-checkbox-focus">
     <Checkbox cls="unselected-checkbox selected-container">
        <div style={{width: '6px'}} className="select-line">

        </div>
    </Checkbox>
    </div>
    );    

// checkbox selected disabled indeterminate
export const SelectedDisabledIndeterminate = () => (
    <Checkbox cls="unselected-checkbox unselected-checkbox-disabled selected-container">
        <div style={{width: '6px'}} className="select-line-disabled">

        </div>
    </Checkbox>
    );   
    
// checkbox selected disabled focus
export const SelectedDisabledFocusIndeterminate = () => (
    <div className="unselected-checkbox-focus">
<Checkbox cls="unselected-checkbox unselected-checkbox-disabled selected-container">
        <div style={{width: '6px'}} className="select-line-disabled">

        </div>
    </Checkbox>
    </div>  
    );        
    );    
