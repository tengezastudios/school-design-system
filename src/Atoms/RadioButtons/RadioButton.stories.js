import React from 'react';
import '../../styles/style.scss';
import { RadioButton } from './RadioButton';

export default {
  title: 'RadioButtons',
  component: RadioButton
};

// Radio unselected active
export const UnselectedRadioActive = () => (<RadioButton cls="unselected-radio" />);

// Radio unselected disabled
export const UnselectedRadioDisabled = () => (<RadioButton cls="unselected-radio unselected-radio-disabled" />);

// Radio unselected focus active
export const UnselectedRadioActiveFocus = () => (<div className="unselected-radio-focus">
    <RadioButton cls="unselected-radio" />
    </div>);

// Radio unselected focus disabled
export const UnselectedRadioDisabledFocus = () => (<div className="unselected-radio-focus">
    <RadioButton cls="unselected-radio unselected-radio-disabled" />
    </div>);    

// Radio selected active
export const SelectedRadioActive = () => (
    <RadioButton cls="unselected-radio selected-container">
        <div style={{width: '6px', height: '6px'}} className="select-radio">

        </div>
    </RadioButton>
    );    

// Radio selected focus
export const SelectedRadioActiveFocus = () => (<div className="unselected-radio-focus">
     <RadioButton cls="unselected-radio selected-container">
        <div style={{width: '6px', height: '6px'}} className="select-radio">

        </div>
    </RadioButton>
    </div>);    

// Radio selected disabled
export const SelectedRadioDisabled = () => (
    <RadioButton cls="unselected-radio unselected-radio-disabled selected-container">
        <div style={{width: '6px', height: '6px'}} className="select-radio-disabled">

        </div>
    </RadioButton>
    );   
    
// Radio selected disabled focus
export const SelectedRadioDisabledFocus = () => (
    <div className="unselected-radio-focus">
<RadioButton cls="unselected-radio unselected-radio-disabled selected-container">
        <div style={{width: '6px', height: '6px'}} className="select-radio-disabled">

        </div>
    </RadioButton>
    </div>
    
    );       

