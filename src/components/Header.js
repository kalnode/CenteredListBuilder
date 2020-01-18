import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../components/Logo';

function Header(props) {
  return (
    <><Logo />
    <h1>Centered-list Styling Tool</h1>

    <ul id="navigation">
      <li><NavLink exact={true} activeClassName='is-active' to='/about'>About</NavLink></li>
      <li><NavLink activeClassName='is-active' to='/tool'>Make a List</NavLink></li>
    </ul>

    </>
  );
}

export default Header;