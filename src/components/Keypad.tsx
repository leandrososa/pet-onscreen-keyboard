import React from 'react';
import {CommodoreKey} from './Key';

const keys: string[] = ['q', 'w', 'e', 'r', 't', 'y']


export const CommodoreKeypad = () =>{
    return keys.map((keyletter, index) => {
        return (
            <CommodoreKey key={index} keyletter={keyletter}/>
        )
    });
}