import React, { useEffect } from 'react';
import { getCategories } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import { NavLink } from 'react-router-dom';

export const NavBar = () =>{
  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories)

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  return (
    <header className="navbar">
            <h1 className="navbar_title">Blog</h1>
            <nav className="navbar_nav">
                <ul className="navbar_items">
                  <li className="navbar_item"><NavLink exact to="/" activeClassName="menu_item--active">Home</NavLink></li>
                    {categories && categories.map((category, index) => (
                      <li className="navbar_item" key={index}><NavLink to={`/${category.path}`} activeClassName="menu_item--active">{category.name}</NavLink></li>
                    ))}
                    {/*<li className="navbar_item">Home</li>
                    <li className="navbar_item">React</li>
                    <li className="navbar_item">Redux</li>
                    <li className="navbar_item">Compasso</li>
                    <li className="menu_item"><NavLink exact to="/" activeClassName="menu_item--active">Home</NavLink></li>
                    <li className="menu_item"><NavLink to="/react" activeClassName="menu_item--active">React</NavLink></li>
                    <li className="menu_item"><NavLink to="/redux" activeClassName="menu_item--active">Redux</NavLink></li>
                    <li className="menu_item"><NavLink to="/compasso" activeClassName="menu_item--active">Compasso</NavLink></li>*/}
                </ul>  
            </nav>
    </header>
  )
}