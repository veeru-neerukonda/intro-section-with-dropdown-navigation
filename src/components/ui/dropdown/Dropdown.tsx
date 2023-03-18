import { useState,useEffect,PropsWithChildren } from 'react';
import { motion } from "framer-motion"

import classes from './Dropdown.module.scss'
import { IconContext } from "react-icons";
import { HiChevronDown } from 'react-icons/hi';

interface DropdownProps {
    label: string;
}

export default function Dropdown({label,children}: PropsWithChildren<DropdownProps>){

    const [mouseHovering,setMouseHovering] = useState(false);
    const [menuOpen,setMenuOpen] = useState(false);
    const toggleMenuOpen = function(event: React.MouseEvent<HTMLElement>){
        event.stopPropagation();
        if(mouseHovering === true && menuOpen === false){
            setMenuOpen(false);
            setMouseHovering(false);
        }
        else{
            setMenuOpen(!menuOpen);
        }
    }
    const closeMenu = function(){
        setMenuOpen(false);
    }

    useEffect(function(){
        document.body.addEventListener('click',closeMenu)
        return () => document.body.removeEventListener('click',closeMenu);
    },[])

    return(
        <div 
            className={classes['dropdown']} 
            onClick={(event: React.MouseEvent<HTMLElement>) => event.stopPropagation()}
            onMouseEnter={() => setMouseHovering(true)} 
            onMouseLeave={() => setMouseHovering(false)}
        >
            <div className={`${classes['dropdown__label']}`} onClick={(event: React.MouseEvent<HTMLElement>) => toggleMenuOpen(event)}>
                <h1 className={`${classes['dropdown__label__text']}`}>{label}</h1>
                <IconContext.Provider value={{className: `${classes['dropdown__label__arrow']} ${(menuOpen || mouseHovering)?'rotate180deg':''}`}}>
                    <HiChevronDown />
                </IconContext.Provider>
            </div>
            <motion.ul animate={{height: (menuOpen || mouseHovering)?'auto':0}} className={`${classes['dropdown__menu']}`}>
                {children}
            </motion.ul>
        </div>
    )
}