import React from 'react';
import { action } from '@storybook/addon-actions';
import {Button} from '../Buttons/Button';
import '../../styles/style.scss';

export default {
  title: 'Buttons',
  component: Button
};

const $blue50  = '#2662d9';
const $blue40 = '#1f4ead';
const $gray70 = "#b2b2b2";
const $white = "#fff";


//Base button
export const Base = () => (<Button cls="button button_base_state" fn={action('base button')} icon="none">
    <p className="button_text">BUTTON</p>
</Button>);


//PRIMARY BUTTON STORIES

//Primary active button
export const PrimaryActive = () => (
  <Button cls="button primary_button_active_state" onClick={action('active')} border="none"  icon="none" fn={action('primary active button')}>
    <p className="button_text">BUTTON</p>
  </Button>
);

//Primary hover button
export const PrimaryHover = () => (
  <Button cls="button primary_button_hover_state" onClick={action('hover')} border="none" icon="none" fn={action('primary hover button')}>
    <p className="button_text">BUTTON</p>
  </Button>
);

//Primary focus button
export const PrimaryFocus = () => (
  <Button cls="button primary_button_hover_state" onClick={action('hover')} icon="none" fn={action('primary focus button')}>
    <p className="button_text">BUTTON</p>
  </Button>
);

//Primary clicked button
export const PrimaryClicked = () => (
  <Button cls="button primary_button_clicked_state" onClick={action('hover')} icon="none" border="none" fn={action('primary focus button')}>
    <p className="button_text">BUTTON</p>
  </Button>
);

//Primary disabled button
export const PrimaryDisabled = () => (
  <Button cls="button primary_button_disabled_state" onClick={action('hover')} icon="none" border="none" fn={action('primary focus button')}>
    <p className="button_text">BUTTON</p>
  </Button>
);

//Primary active button with icon 
export const PrimaryActiveIconLeft = () => (
  <Button cls="button_icon primary_button_active_state" clsIcon="left_icon" border="none" iconStroke={$white} fn={action('primary focus button')} d="M10 12L6 8L10 4">
    <p className="button_icon_text">BUTTON</p>
  </Button>
);

//Primary hover button with icon
export const PrimaryHoverIconLeft = () => (
  <Button cls="button_icon primary_button_hover_state" clsIcon="left_icon" border="none" iconStroke={$white} fn={action('primary focus button')} d="M10 12L6 8L10 4">
    <p className="button_icon_text">BUTTON</p>
  </Button>
);

//Primary clicked button with icon
export const PrimaryClickedIconLeft = () => (
  <Button cls="button_icon primary_button_clicked_state" clsIcon="left_icon" border="none" iconStroke={$white} fn={action('primary focus button')} d="M10 12L6 8L10 4">
    <p className="button_icon_text">BUTTON</p>
  </Button>
);

//Primary focused button with icon
export const PrimaryFocusIconLeft = () => (
  <Button cls="button_icon primary_button_active_state" clsIcon="left_icon" iconStroke={$white} fn={action('primary focus button')} d="M10 12L6 8L10 4">
    <p className="button_icon_text">BUTTON</p>
  </Button>
);

//Primary disabled button with icon
export const PrimaryDisableIconLeft = () => (
  <Button cls="button_icon primary_button_disabled_state" clsIcon="left_icon" border="none" iconStroke={$white} fn={action('primary focus button')} d="M10 12L6 8L10 4">
    <p className="button_icon_text">BUTTON</p>
  </Button>
);


//SECONDARY BUTTON STORIES

//Secondary active button
export const SecondaryActive = () => (
  <Button cls="button secondary_button_active_state" onClick={action('hover')} icon="none" border="none" fn={action('primary focus button')}>
    <p className="button_text">BUTTON</p>
  </Button>
);

//Secondary hover button
export const SecondaryHover = () => (
  <Button cls="button secondary_button_disabled_state" onClick={action('hover')} icon="none" border="none" fn={action('primary focus button')}>
    <p className="button_text">BUTTON</p>
  </Button>
);

//Secondary clicked button
export const SecondaryClicked = () => (
  <Button cls="button secondary_button_hover_state" icon="none" border="none" fn={action('primary focus button')}>
    <p className="button_text">BUTTON</p>
  </Button>
);

//Secondary focused button
export const SecondaryFocused = () => (
  <Button cls="button secondary_button_active_state" icon="none" fn={action('primary focus button')}>
    <p className="button_text">BUTTON</p>
  </Button>
);

//Secondary disabled button
export const SecondaryDisabled = () => (
  <Button cls="button secondary_button_disabled_state" icon="none" border="none" fn={action('primary focus button')}>
    <p className="button_text">BUTTON</p>
  </Button>
);

//Secondary active button with icon
export const SecondaryActiveIconLeft = () => (
  <Button cls="button_icon secondary_button_active_state" clsIcon="left_icon" border="none" iconStroke={$white} fn={action('primary focus button')} d="M10 12L6 8L10 4">
    <p className="button_icon_text">BUTTON</p>
  </Button>
);

//Secondary hover button with icon
export const SecondaryHoverIconLeft = () => (
  <Button cls="button_icon secondary_button_hover_state" clsIcon="left_icon" border="none" iconStroke={$white} fn={action('primary focus button')} d="M10 12L6 8L10 4">
    <p className="button_icon_text">BUTTON</p>
  </Button>
);

//Secondary clicked button with icon
export const SecondaryClickedIconLeft = () => (
  <Button cls="button_icon secondary_button_clicked_state" clsIcon="left_icon" border="none" iconStroke={$white} fn={action('primary focus button')} d="M10 12L6 8L10 4">
    <p className="button_icon_text">BUTTON</p>
  </Button>
);

//Secondary focused button with icon
export const SecondaryFocusIconLeft = () => (
  <Button cls="button_icon secondary_button_active_state" clsIcon="left_icon" iconStroke={$white} fn={action('primary focus button')} d="M10 12L6 8L10 4">
    <p className="button_icon_text">BUTTON</p>
  </Button>
);

//Secondary disabled button with icon
export const SecondaryDisabledIconLeft = () => (
  <Button cls="button_icon secondary_button_disabled_state" clsIcon="left_icon" border="none" iconStroke={$white} fn={action('primary focus button')} d="M10 12L6 8L10 4">
    <p className="button_icon_text">BUTTON</p>
  </Button>
);


//TERTIARY BUTTONS

//Left tertiary active button
export const TertiaryLeftActive = () => (
  <Button cls="button_icon tertiary_button_active_state" clsIcon="left_icon" iconStroke={$blue50} border="none" fn={action('primary focus button')} d="M10 12L6 8L10 4" >
    <p className="button_tertiary_text">BUTTON</p>
  </Button>
);

//Left tertiary hover button
export const TertiaryLeftHover = () => (
  <Button cls="button_icon tertiary_button_hover_state" clsIcon="left_icon" iconStroke={$blue50} border="none" fn={action('primary focus button')} d="M10 12L6 8L10 4">
    <p className="button_tertiary_text">BUTTON</p>
  </Button>
);

//Left tertiary clicked button
export const TertiaryLeftClicked = () => (
  <Button cls="button_icon tertiary_button_clicked_state" clsIcon="left_icon" iconStroke={$blue40} border="none" fn={action('primary focus button')} d="M10 12L6 8L10 4">
    <p className="button_tertiary_text">BUTTON</p>
  </Button>
);

//Left tertiary disabled button
export const TertiaryLeftDisabled = () => (
  <Button cls="button_icon tertiary_button_disabled_state" clsIcon="left_icon" iconStroke={$gray70} border="none" fn={action('primary focus button')} d="M10 12L6 8L10 4">
    <p style={{color: $gray70}} className="button_tertiary_text">BUTTON</p>
  </Button>
);


//Left tertiary focused button
export const TertiaryLeftFocus = () => (
  <Button cls="button_icon tertiary_button_focus_state" clsIcon="left_icon" iconStroke={$blue50}  fn={action('primary focus button')} d="M10 12L6 8L10 4">
    <p className="button_tertiary_text">BUTTON</p>
  </Button>
);

//Right tertiary active button
export const TertiaryRightActive = () => (
  <Button cls="button_icon tertiary_button_active_state" clsIcon="right_icon" iconStroke={$blue50} border="none" fn={action('primary focus button')} d="M6 12L10 8L6 4">
    <p className="button_tertiary_text_right">BUTTON</p>
  </Button>
);

//Right tertiary hover button
export const TertiaryRightHover = () => (
  <Button cls="button_icon tertiary_button_hover_state" clsIcon="right_icon" iconStroke={$blue50} border="none" fn={action('primary focus button')} d="M6 12L10 8L6 4">
    <p className="button_tertiary_text_right">BUTTON</p>
  </Button>
);

//Right tertiary clicked button
export const TertiaryRightClicked = () => (
  <Button cls="button_icon tertiary_button_clicked_state" clsIcon="right_icon" iconStroke={$blue40} border="none" fn={action('primary focus button')} d="M6 12L10 8L6 4">
    <p className="button_tertiary_text_right">BUTTON</p>
  </Button>
);

//Right tertiary focused button
export const TertiaryRightFocused = () => (
  <Button cls="button_icon tertiary_button_active_state" clsIcon="right_icon" iconStroke={$blue50}  fn={action('primary focus button')} d="M6 12L10 8L6 4">
    <p className="button_tertiary_text_right">BUTTON</p>
  </Button>
);

//Right tertiary disabled button
export const TertiaryDisabledRight = () => (
  <Button cls="button_icon tertiary_button_disabled_state" clsIcon="right_icon" iconStroke={$gray70} border="none" fn={action('primary focus button')} d="M6 12L10 8L6 4">
    <p style={{color: $gray70}} className="button_tertiary_text_right">BUTTON</p>
  </Button>
);


//DANGER BUTTON STORIES

//Danger active button
export const DangerActive = () => (
  <Button cls="button danger_button_active_state" onClick={action('hover')} border="none" icon="none" fn={action('primary focus button')}>
    <p className="button_text">BUTTON</p>
  </Button>
);

//Danger hover button
export const DangerHover = () => (
  <Button cls="button danger_button_hover_state" onClick={action('hover')} icon="none" border="none" fn={action('primary focus button')}>
    <p className="button_text">BUTTON</p>
  </Button>
);

//Danger clicked button
export const DangerClicked = () => (
  <Button cls="button danger_button_clicked_state" onClick={action('hover')} icon="none" border="none" fn={action('primary focus button')}>
    <p className="button_text">BUTTON</p>
  </Button>
);

//Danger focused button
export const DangerFocused = () => (
  <Button cls="button danger_button_active_state" onClick={action('hover')} icon="none" fn={action('primary focus button')}>
    <p className="button_text">BUTTON</p>
  </Button>
);

//Active danger button with icon
export const DangerActiveIconLeft = () => (
  <Button cls="button_icon danger_button_active_state" clsIcon="left_icon" border="none" iconStroke={$white} fn={action('primary focus button')} d="M10 12L6 8L10 4">
    <p className="button_icon_text">BUTTON</p>
  </Button>
);

//Hover danger button with icon
export const DangerHoverIconLeft = () => (
  <Button cls="button_icon danger_button_hover_state" clsIcon="left_icon" border="none" iconStroke={$white} fn={action('primary focus button')} d="M10 12L6 8L10 4">
    <p className="button_icon_text">BUTTON</p>
  </Button>
);

//Clicked danger button with icon
export const DangerClickedIconLeft = () => (
  <Button cls="button_icon danger_button_clicked_state" clsIcon="left_icon" border="none" iconStroke={$white} fn={action('primary focus button')} d="M10 12L6 8L10 4">
    <p className="button_icon_text">BUTTON</p>
  </Button>
);

//Focused danger button with icon
export const DangerFocusIconLeft = () => (
  <Button cls="button_icon danger_button_active_state" clsIcon="left_icon" iconStroke={$white} fn={action('primary focus button')} d="M10 12L6 8L10 4">
    <p className="button_icon_text">BUTTON</p>
  </Button>
);

//Disabled danger button with icon
export const DangerDisabledIconLeft = () => (
  <Button cls="button_icon danger_button_disabled_state" clsIcon="left_icon" border="none" iconStroke={$white} fn={action('primary focus button')} d="M10 12L6 8L10 4">
    <p className="button_icon_text">BUTTON</p>
  </Button>
);