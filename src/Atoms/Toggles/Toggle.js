import React from 'react';
import '../../styles/style.scss';
import { motion } from 'framer-motion';

export const Toggle = ({cls, children}) => (
    <div className={cls}>
        {children}
        </div>
    
)