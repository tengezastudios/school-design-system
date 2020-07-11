import React from 'react';
import '../../styles/style.scss';
import { TextInput } from './TextInput';

export default {
  title: 'TextInput',
  component: TextInput
};

// Text Input Base
export const TextInputBase = () => (
        <TextInput cls="text-input-container">  
            <p className="text-label-container">Input label</p>
            <input className="text-input-field" type="text" placeholder="Placeholder Input"/>   
        </TextInput>
);

// Text Input Disabled
export const TextInputDisabled = () => (
    <TextInput cls="text-input-container">  
        <p className="text-label-container disabled">Input label</p>
        <input className="text-input-field disabled-placeholder" type="text" placeholder="Placeholder Input"/>   
    </TextInput>
);

// Text Input Error
export const TextInputError = () => (
    <TextInput cls="text-input-container">  
    <p className="text-label-container disabled">Input label</p>
    <input className="text-input-field disabled-placeholder error" type="text" placeholder="Placeholder Input"/>  
          <p className="error-text">Error text</p>   
    </TextInput>
  );