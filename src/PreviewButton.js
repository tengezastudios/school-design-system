import React from 'react';
import {Button} from './Atoms/Buttons/Button';

export default class PreviewButton extends React.Component {
    render() {
        return(
            <div style={{width: '100%', height: '100%'}}>
            <Button cls="button_icon secondary_button_hover_state" clsIcon="left_icon" border="none" iconStroke="white" fn={console.log('working')}>
                <p className="button_icon_text">BUTTON</p>
            </Button>
            </div>
        )
    }
}