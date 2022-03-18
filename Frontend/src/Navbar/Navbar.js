import React from "react";
import { useState } from "react";
import "./Navbar.css";


function Navbar1() {
    const [activeClass, setActiveClass] = useState('navlinks')
    const displayNavItem = () => {
        if(activeClass === 'navlinks'){
            setActiveClass('navlinks active')
        }else{
            setActiveClass('navlinks')
        }
    }

  return (
    <>
        <div className='navbar'>
            <div className="menu">
                <div className="logo">
                    <a href="#home">Shortly</a>
                </div>
                <i class="fas fa-bars" onClick={displayNavItem}></i>
            </div>
            <div className={activeClass}>
                <ul>
                    <li className="nav-item"><a href="#home">Features</a></li>
                    <li className="nav-item"><a href="#home">Pricing</a></li>
                    <li className="nav-item"><a href="#home">Resources</a></li>
                </ul>
                <div className="btn-cont">
                    <button className="btn-outline">Login</button>
                    <button className="btn">Signup</button>
                </div>    
            </div>
        </div>
    </>
  );
}

export default Navbar1;
