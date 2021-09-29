import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

export const NavBar = () =>{
  return (
    <header className="navbar">
            <h1 className="navbar_title">Blog</h1>
            <nav className="navbar_nav">
                <ul className="navbar_items">
                    <li className="navbar_item">Home</li>
                    <li className="navbar_item">React</li>
                    <li className="navbar_item">Redux</li>
                    <li className="navbar_item">Compasso</li>
                    {/*<li className="menu_item"><NavLink exact to="/" activeClassName="menu_item--active">Home</NavLink></li>
                    <li className="menu_item"><NavLink to="/react" activeClassName="menu_item--active">React</NavLink></li>
                    <li className="menu_item"><NavLink to="/redux" activeClassName="menu_item--active">Redux</NavLink></li>
                    <li className="menu_item"><NavLink to="/compasso" activeClassName="menu_item--active">Compasso</NavLink></li>*/}
                </ul>  
            </nav>
    </header>
  )
}