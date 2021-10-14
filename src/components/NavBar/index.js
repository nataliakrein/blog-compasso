import React from 'react';
import './style.css';
import { Menu } from '..';

export const NavBar = () =>{
  return (
    <header className="navbar">
            <h1 className="navbar_title">Blog</h1>
            <nav className="navbar_nav">
                <Menu/>
            </nav>
    </header>
  )
}