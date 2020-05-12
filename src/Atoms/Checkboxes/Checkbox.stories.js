import React from 'react';
import {Checkbox} from '../Checkboxes/Checkbox';
import '../../styles/style.scss';

export default {
  title: 'Checkboxes',
  component: Checkbox
};


// checkbox unselected active
export const UnselectedActive = () => (<Checkbox cls="unselected-checkbox" />);

// checkbox unselected disabled
export const UnselectedDisabled = () => (<Checkbox cls="unselected-checkbox unselected-checkbox-disabled" />);

// checkbox unselected focus active
export const UnselectedActiveFocus = () => (<div className="unselected-checkbox-focus">
    <Checkbox cls="unselected-checkbox" />
    </div>);

// checkbox unselected focus disabled
export const UnselectedDisabledFocus = () => (<div className="unselected-checkbox-focus">
    <Checkbox cls="unselected-checkbox unselected-checkbox-disabled" />
    </div>);    

// checkbox selected active
export const SelectedActive = () => (
    <Checkbox cls="unselected-checkbox selected-container">
        <div style={{width: '6px', height: '6px'}} className="select-block">

        </div>
    </Checkbox>
    );    

// checkbox selected focus
export const SelectedActiveFocus = () => (<div className="unselected-checkbox-focus">
     <Checkbox cls="unselected-checkbox selected-container">
        <div style={{width: '6px', height: '6px'}} className="select-block">

        </div>
    </Checkbox>
    </div>);    

// checkbox selected disabled
export const SelectedDisabled = () => (
    <Checkbox cls="unselected-checkbox unselected-checkbox-disabled selected-container">
        <div style={{width: '6px', height: '6px'}} className="select-block-disabled">

        </div>
    </Checkbox>
    );   
    
// checkbox selected disabled focus
export const SelectedDisabledFocus = () => (
    <div className="unselected-checkbox-focus">
<Checkbox cls="unselected-checkbox unselected-checkbox-disabled selected-container">
        <div style={{width: '6px', height: '6px'}} className="select-block-disabled">

        </div>
    </Checkbox>
    </div>
    
    );       

     
    