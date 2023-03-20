import React from 'react';
import Classes from './Button.module.scss';

interface ButtonProps {
    label: string, //every button must have a label
    size?: string //small or big are options for now
    styleModifiers?: string  //rounded and black are two other options for now
}

export default function Button(props: ButtonProps) {

    let buttonSizeClassName: string | null = null;
    switch(props.size){
        case "small":   buttonSizeClassName = Classes['button--sm'];
                        break;
        case "big":     buttonSizeClassName = Classes['button--bg'];
                        break;
    }

    let buttonStyleClassName='';
    if(props.styleModifiers?.split(' ').find(item => item === "rounded") != undefined)
        buttonStyleClassName = `${buttonStyleClassName} ${Classes['button--rounded']}`;
    if(props.styleModifiers?.split(' ').find(item => item === "black") != undefined)
        buttonStyleClassName = `${buttonStyleClassName} ${Classes['button--black']}`;
    if(props.styleModifiers?.split(' ').find(item => item === "bold") != undefined)
        buttonStyleClassName = `${buttonStyleClassName} ${Classes['button--bold-font']}`;

    return(
        <button className={`${Classes['button']} ${buttonSizeClassName} ${buttonStyleClassName}`}>
            {props.label}
        </button>
    );
}