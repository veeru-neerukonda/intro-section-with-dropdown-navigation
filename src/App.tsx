import React from 'react';
import Dropdown from "./components/ui/dropdown/Dropdown";

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
            <Dropdown label='dropdown'>
                <li>entry 1</li>
                <li>entry 2</li>
                <li>entry 3</li>
            </Dropdown>
        </div>
    )
}