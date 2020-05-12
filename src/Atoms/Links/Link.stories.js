import React from 'react';
import {Link} from '../Links/Link';
import '../../styles/style.scss';

export default {
  title: 'Links',
  component: Link
};


//  link body-01
export const LinkBody1Active = () => (<span className="link-body-01 link-active" >Link</span>);

export const LinkBody1Hover = () => (<span className="link-body-01 link-hover" >Link</span>);

export const LinkBody1Clicked = () => (<span className="link-body-01 link-clicked" >Link</span>);

export const LinkBody1Disabled = () => (<span className="link-body-01 link-disabled" >Link</span>);

export const LinkBody1Focused = () => (<span className="link-container-focus link-body-01 link-active" >Link</span>);

// link body-02
export const LinkBody2Active = () => (<span className="link-body-02 link-active" >Link</span>);

export const LinkBody2Hover = () => (<span className="link-body-02 link-hover" >Link</span>);

export const LinkBody2Clicked = () => (<span className="link-body-02 link-clicked" >Link</span>);

export const LinkBody2Disabled = () => (<span className="link-body-02 link-disabled" >Link</span>);

export const LinkBody2Focused = () => (<span className="link-container-focus link-body-02 link-active" >Link</span>);
