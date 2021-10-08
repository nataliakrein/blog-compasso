import React, { useEffect } from 'react';
import { getCategories } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import { NavLink } from 'react-router-dom';
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