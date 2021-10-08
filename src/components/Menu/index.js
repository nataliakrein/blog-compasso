import React, { useEffect } from 'react';
import { getCategories } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import { NavLink } from 'react-router-dom';

export const Menu = ({close}) =>{
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories)
  
    useEffect(() => {
      dispatch(getCategories())
    }, [])
  
    return (
        <ul className="menu_items">
        <li onClick={close} className="menu_item"><NavLink exact to="/" activeClassName="menu_item--active">Home</NavLink></li>
            {categories && categories.map((category, index) => (
            <li onClick={close} className="menu_item" key={index}><NavLink to={`/${category.path}`} activeClassName="menu_item--active">{category.name}</NavLink></li>
            ))}
        </ul>  
    )
  }