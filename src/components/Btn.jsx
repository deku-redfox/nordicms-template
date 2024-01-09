// Border-button rectangulaire

import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Btn({
    to,
    toId = '',
    title = '',
    dark = false,
}) {

    const handleClick = ()=> {
        if (toId) {
            const offsetTop = document.getElementById(toId).offsetTop
            window.scrollTo({
                top: offsetTop - 100
            })   
        }
    }

    return (
        <Link onClick={handleClick} to={to ?? toId} className={`border-2 text-lg font-normal py-[0.4rem] px-4 
            tracking-tight hover:border-transparent ${dark ? 'hover:bg-black/5' : 'hover:bg-white/20'} 
            ${dark ? 'border-primary-dark text-primary-dark' : 'border-white text-white'}`}>
                {title.toUpperCase()}
        </Link>
    )
}