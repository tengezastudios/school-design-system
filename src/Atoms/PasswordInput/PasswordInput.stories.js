import React from 'react';
import '../../styles/style.scss';
import { PasswordInput } from './PasswordInput';

export default {
  title: 'PasswordInput',
  component: PasswordInput
};

// Password Input Base
export const PasswordInputBase = () => (
        <PasswordInput cls="password-input-container">  
            <p className="password-label-container">Input label</p>
            <input className="password-input-field" placeholder="Password Input"/>
         
              <svg className="password-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.41268 9.41343C9.22958 9.60993 9.00878 9.76754 8.76345 9.87685C8.51812 9.98616 8.25328 10.0449 7.98474 10.0497C7.7162 10.0544 7.44946 10.005 7.20042 9.90443C6.95139 9.80384 6.72516 9.65412 6.53525 9.4642C6.34533 9.27428 6.19561 9.04806 6.09502 8.79902C5.99443 8.54999 5.94503 8.28325 5.94977 8.0147C5.95451 7.74616 6.01329 7.48133 6.1226 7.236C6.23191 6.99067 6.38952 6.76986 6.58602 6.58677M11.9593 11.9601C10.8197 12.8288 9.43209 13.31 7.99935 13.3334C3.33268 13.3334 0.666016 8.0001 0.666016 8.0001C1.49528 6.4547 2.64544 5.1045 4.03935 4.0401L11.9593 11.9601ZM6.59935 2.82676C7.05824 2.71935 7.52806 2.66566 7.99935 2.66676C12.666 2.66676 15.3327 8.0001 15.3327 8.0001C14.928 8.75717 14.4454 9.46992 13.8927 10.1268L6.59935 2.82676Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M0.666016 0.666748L15.3327 15.3334" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>   
        </PasswordInput>
);
 
// Password Input Error
export const PasswordInputError = () => (
  <PasswordInput cls="password-input-container">  
      <p className="password-label-container">Input label</p>
      <input className="password-input-field error" placeholder="Password Input"/>   
        <svg className="error-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.41268 9.41343C9.22958 9.60993 9.00878 9.76754 8.76345 9.87685C8.51812 9.98616 8.25328 10.0449 7.98474 10.0497C7.7162 10.0544 7.44946 10.005 7.20042 9.90443C6.95139 9.80384 6.72516 9.65412 6.53525 9.4642C6.34533 9.27428 6.19561 9.04806 6.09502 8.79902C5.99443 8.54999 5.94503 8.28325 5.94977 8.0147C5.95451 7.74616 6.01329 7.48133 6.1226 7.236C6.23191 6.99067 6.38952 6.76986 6.58602 6.58677M11.9593 11.9601C10.8197 12.8288 9.43209 13.31 7.99935 13.3334C3.33268 13.3334 0.666016 8.0001 0.666016 8.0001C1.49528 6.4547 2.64544 5.1045 4.03935 4.0401L11.9593 11.9601ZM6.59935 2.82676C7.05824 2.71935 7.52806 2.66566 7.99935 2.66676C12.666 2.66676 15.3327 8.0001 15.3327 8.0001C14.928 8.75717 14.4454 9.46992 13.8927 10.1268L6.59935 2.82676Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M0.666016 0.666748L15.3327 15.3334" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p className="error-text">Wrong password</p>   
  </PasswordInput>
);

// Password Input Disabled
export const PasswordInputDisabled = () => (
  <PasswordInput cls="password-input-container">  
      <p className="password-label-container disabled">Input label</p>
      <input className="password-input-field disabled" placeholder="Password Input"/>   
        <svg className="error-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.41268 9.41343C9.22958 9.60993 9.00878 9.76754 8.76345 9.87685C8.51812 9.98616 8.25328 10.0449 7.98474 10.0497C7.7162 10.0544 7.44946 10.005 7.20042 9.90443C6.95139 9.80384 6.72516 9.65412 6.53525 9.4642C6.34533 9.27428 6.19561 9.04806 6.09502 8.79902C5.99443 8.54999 5.94503 8.28325 5.94977 8.0147C5.95451 7.74616 6.01329 7.48133 6.1226 7.236C6.23191 6.99067 6.38952 6.76986 6.58602 6.58677M11.9593 11.9601C10.8197 12.8288 9.43209 13.31 7.99935 13.3334C3.33268 13.3334 0.666016 8.0001 0.666016 8.0001C1.49528 6.4547 2.64544 5.1045 4.03935 4.0401L11.9593 11.9601ZM6.59935 2.82676C7.05824 2.71935 7.52806 2.66566 7.99935 2.66676C12.666 2.66676 15.3327 8.0001 15.3327 8.0001C14.928 8.75717 14.4454 9.46992 13.8927 10.1268L6.59935 2.82676Z" stroke="#B3B3B3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M0.666016 0.666748L15.3327 15.3334" stroke="#B3B3B3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
  </PasswordInput>
);
