import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import { faAdd, faBars, faChevronDown, faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { mainLinks, topLinks } from "../datas/nav-links";


function Navlink({
    onclick,
    route = '',
    title = '',
    subLinks = []
}) {

    const [onSublink, setOnSublink] = useState()

    const handleToggleSublinks = () => {
        setOnSublink((val) => !val)
    }
    
    return (
        <>
            <li className="navlink" onClick={()=> {
                onclick(),
                subLinks.length > 0 && handleToggleSublinks()
            }}>
                <NavLink to={route} className={({isActive}) => `${(isActive && route != '#') && 'text-third'} 
                    flex-1 flex items-center justify-between px-6`}>
                    <span>{title}</span>
                    {
                      subLinks.length > 0 && (
                        <FontAwesomeIcon icon={onSublink ? faClose : faAdd} className="text-third"/>
                      )  
                    }
                </NavLink>
                <div className="bg-primary-light/50 mx-3 h-[1px]"></div>
            </li>
            {
                subLinks.length > 0 && subLinks.map((sublink, i) => (
                    <li key={i} className={`navlink ${!onSublink && 'hidden'}`} onClick={onclick}>
                        <NavLink to={sublink.route} className={({isActive}) => `${(isActive && sublink.route != '#') && 'text-third'} 
                            flex-1 flex items-center pr-6 pl-10`}>
                            {sublink.title}
                        </NavLink>
                        <div className="bg-primary-light/50 mr-3 ml-8 h-[1px]"></div>
                    </li>
                ))
            }
        </>
    )
}

function Topbar() {
    
    return (
        <div className="bg-primary h-[30px] xl:flex justify-end space-x-5 hidden pr-8 align-middle font-open-sans">
            {topLinks.map((link, index) => (
                <NavLink key={index} to={link.route} className={({isActive}) => `${(isActive && link.route != '#') ? 'text-third' : 'text-white'} 
                    relative text-xs flex items-center ${!link.extern && 'group'}`}>
                    
                    {link.icon && <img src={link.icon} alt={link.title + 'icon'} className="w-[15px] mr-1 pt-[2px]" /> }
                    
                    <span className="duration-[400ms] group-hover:opacity-70">{link.title}</span>

                    {link.subLinks && <FontAwesomeIcon icon={faChevronDown} className="ml-2 text-[10px] duration-[400ms] group-hover:opacity-70"/>}

                    {
                        link.subLinks && (
                            <ul className="opacity-0 invisible group-hover:visible group-hover:opacity-100 duration-200 bg-primary-light absolute top-[30px] right-0 w-[230px] z-[2000]">
                                {
                                    link.subLinks.map((e, i) => (
                                        <li key={i}>
                                            <NavLink to={e.route} className="block px-2 py-[10px] border-b
                                                border-primary-dark hover:bg-black/30">
                                                {e.title}
                                            </NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        )
                    }
                </NavLink>
            ))}
        </div>
    )
}

export default function Header() {

    const [isSearch, setIsSearch] = useState(false)
    const [onMenu, setOnMenu] = useState(false)

    return (
        <div className="fixed top-0 left-0 right-0 z-[1000]">
            <Topbar />
            <div className="absolute top-full left-0 right-0 bg-primary-dark h-[80px] lg:h-[87px] xl:h-[76px] xl:shadow-header">

                <div className="header-container mx-auto flex items-center justify-between h-full">
                    
                    <Link to='/' onClick={()=> {
                        if (onMenu) setOnMenu(false)
                    }}>
                        <img src="/logo.png" alt="nordicms logo" className="w-[215px] lg:w-[218px] xl:w-[190px]"/>
                    </Link>

                    <div className={`flex lg:flex-row-reverse xl:flex-row items-center space-x-11 xl:space-x-6 relative`}>
                        <ul className={`hidden xl:flex justify-end items-center space-x-5 rollin ${isSearch && 'translate-y-[35px] opacity-0'}`}>
                            {
                                mainLinks.map((link, index) => (
                                    <NavLink key={index} to={link.route} className={({isActive}) => `${(isActive && link.route != '#') ? 'text-third' : 'text-white'} 
                                        text-sm uppercase font-open-srg font-normal tracking-tight duration-[400ms] hover:opacity-70`}>
                                        {link.title}
                                    </NavLink>
                                ))
                            }
                        </ul>

                        <FontAwesomeIcon icon={faSearch} color="white" className={`lg:ml-7 xl:ml-0 rotate-90 text-[18px] cursor-pointer rollin ${isSearch && 'opacity-0 translate-y-2'}`} 
                            onClick={()=> {setIsSearch(true)}}/> 
                        <FontAwesomeIcon icon={faBars} color="white" className={`xl:hidden ml-6 text-[22px] cursor-pointer rollin ${isSearch && 'translate-y-[35px] opacity-0'}`}
                            onClick={()=> {setOnMenu(!onMenu)}}/>    
                        
                        <div className={`absolute w-full flex items-center space-x-3 right-0 xl:right-6 rollin 
                            ${isSearch ? 'opacity-100 z-30 translate-y-0' : 'opacity-0 -z-10 -translate-y-[40px]'}`}>

                            <input type="text" placeholder="SEARCH ..." className="w-full bg-transparent text-white text-sm placeholder:text-white" />
                            <FontAwesomeIcon icon={faClose} color="white" className="absolute -right-6 text-[22px] cursor-pointer"
                                onClick={()=> {setIsSearch(false)}}/>

                        </div>    
                    </div>          

                </div>

                <div className={`xl:hidden bg-primary-dark max-h-[505px] w-[80%] lg:w-full absolute top-full left-1/2 overflow-hidden duration-700
                    -translate-x-1/2 border-t-[3px] ${onMenu ? 'h-[80vh] border-primary-light/50' : 'h-0 -translate-y-1 border-transparent'}`}>

                    <ul className="py-2 scrollable h-full">

                        {
                            mainLinks.map((link, index) => (
                                <Navlink key={index} title={link.title} route={link.route} onclick={()=> {
                                    if (link.route != '#') setOnMenu(false)
                                }}/>
                            ))
                        }
                        {
                            topLinks.map((link, index) => {
                                if (!link.extern) {
                                    return (
                                        <Navlink key={index} title={link.title} route={link.route} onclick={()=> {
                                            if (link.route != '#') setOnMenu(false)}} subLinks={link.subLinks}/>
                                    )
                                }
                            })
                        }

                    </ul>

                </div>

                </div>
        </div>
    );
}