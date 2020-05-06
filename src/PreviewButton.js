import React from 'react';
import {Button} from './Atoms/Buttons/Button';


const $blue50  = '#2662d9';
export default class PreviewButton extends React.Component {
    render() {
        return(
            <div style={{width: '100%', height: '100%'}}>
                <Button cls="button_icon tertiary_button_hover_state" clsIcon="right_icon" iconStroke={$blue50} border="none" fn={console.log('primary focus button')}>
                    <p className="button_tertiary_text_right">BUTTON</p>
                </Button>
            </div>
        )
    }
}