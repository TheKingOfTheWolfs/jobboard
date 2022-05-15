import React, { useContext } from 'react'
import {Context} from "../../index"
import { NavLink, Link } from 'react-router-dom';

function NavBar() {
    const {user} = useContext(Context)
  return (
    <nav className='navbar'>
    <ul className='navbar__list'>
        <Link className='navbar__logo' to='/'>
            Navbar
        </Link>
        <li className='navbar__list__item'>
            <NavLink className='navbar__link' exact to='/'>
                Home
            </NavLink>
        </li>
        <li className='navbar__list__item'>
            <NavLink className='navbar__link' to='/about'>
                About
            </NavLink>
        </li>
        <li className='navbar__list__item'>
            <NavLink className='navbar__link' to='/services'>
                Services
            </NavLink>
        </li>
        <li className='navbar__list__item'>
            <NavLink className='navbar__link' to='/gallery'>
                Gallery
            </NavLink>
        </li>
        <li className='navbar__list__item'>
            <NavLink className='navbar__link' to='/contact'>
                Contact
            </NavLink>
        </li>
        <div className='navbar__button'>
            <div className='navbar__button__component'></div>
            <div className='navbar__button__component'></div>
            <div className='navbar__button__component'></div>
        </div>
    </ul>
</nav>
)
}

export default NavBar