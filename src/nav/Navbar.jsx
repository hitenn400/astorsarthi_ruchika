import './Navbar.css';
import { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {RxCross2} from 'react-icons/rx'
const Navbar=()=>{
    const[showHam,setShowHam]=useState(false);
    const[showcross,setShowCross] = useState(false)
    const[activeNav,setActiveNav]= useState('#')
    return(
        <>
       
        <nav className={showHam?" navMobile":"navD"}>
            {!showcross?<div className='hamburger-menu'>
                <a onClick={()=>{setShowHam(!showHam) ;setShowCross(!showcross)}}>
                    <GiHamburgerMenu></GiHamburgerMenu>
                    
                </a>
            </div>:<></>}
            
            {showHam?<div className='cross-menu'>
                <a onClick={()=>{setShowCross(!showcross);setShowHam(!showHam)}}>
                    <RxCross2></RxCross2>
                    
                </a>
            </div>:<></>}
            <div className='nav_navInner1'>
                <p>Astro Sarthi Ruchika</p>
        </div>
            {/* nav_navInner2 nav_mobile */}
            
            <div className={showHam?" nav_mobile":"nav_navInner2"}>
            <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}>Home</a>
            <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''}>About</a>
            <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav==='#services'?'active':''}>Services</a>
            {/* <a href="#blog" onClick={()=>setActiveNav('#blog')} className={activeNav==='#blog'?'active':''}>Blog</a> */}
            <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}>Contact</a>
            </div>
            {/* hamburger menu */}
            
        </nav>
       
        </>
        );
}
export default Navbar;