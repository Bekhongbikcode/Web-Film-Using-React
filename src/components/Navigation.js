import React, { useState } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { ThemeContexts } from './ThemeProvide'
import {Icon, Navbar } from "react-materialize";
function Navigation() {
    const making = useContext(ThemeContexts);
    return (
        <div className={making.switchs}>
            <Navbar className="menu"
                alignLinks="right"
                brand={<span className="brand-logo" style={{paddingLeft:"20px"}}>Be Movie</span>}
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}
            >
                <ul>
                    <li className="hello"><NavLink to='/'><Icon left>home</Icon> Home</NavLink></li>
                    <li className="hello"><NavLink to='/about'><Icon left>info_outline</Icon>About</NavLink></li>
                    <li className="hello"><NavLink to='/news'><Icon left>dvr</Icon>New</NavLink></li>
                    <li className="hello"><NavLink to='/contact'><Icon left>contacts</Icon>Contact</NavLink></li>
                    <li className="toggle">
                        <a onClick={making.toggleThmeSwitch}>Toggle</a>
                    </li>
                </ul>
            </Navbar>
        </div>
    )
}

export default Navigation;