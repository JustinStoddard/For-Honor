import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <NavLink exact to="/">Welcome</NavLink>
    {' '}
    <NavLink exact to="/Hub">Hub</NavLink>
    {' '}
    <NavLink exact to="/Profiles">Profiles</NavLink>
  </nav>
)

export default NavBar;