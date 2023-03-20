import React from 'react';
import Dropdown from "./components/ui/dropdown/Dropdown";
import Button from './components/ui/Button/Button';

export default function App(){

    const mouseClickEventDispatcher: Array<any>= [];
    const onMouseClickAppWide = function(){
        console.log('mouse click app wide');
        mouseClickEventDispatcher.forEach((func) => {
            func();
        })
    }

    return(
        <div className='center-screen' onClick={() => onMouseClickAppWide}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                rowGap: '8px',
                height: '100vh'
            }}>
                <Button label='Default'/>
                <Button label='Register' styleModifiers='rounded' size='small'/>
                <Button label='Helloyia' styleModifiers='rounded black bold' size='small'/>
                <Button label='Learn More' styleModifiers='rounded black bold' size='big'/>
            </div>
            
        </div>
    )
}