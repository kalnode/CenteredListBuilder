import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../components/Logo';

function Header(props) {
  return (
    <>
    <NavLink exact={true} activeClassName='is-active' to='/'>
    <div style={{margin: "1em",textAlign: "center"}}>
      <Logo />
      <div>
        <h1 style={{marginTop: "0em", marginBottom: "0.3em"}}>Centered-list</h1>
        <h2 style={{marginTop: "0em"}}>Builder</h2>
      </div>
    </div>
    </NavLink>

    <ul id="navigation">
      <li><NavLink activeClassName='is-active' to='/about'>About</NavLink></li>
      <li><NavLink activeClassName='is-active' to='/tool'>Make a List</NavLink></li>
    </ul>
    </>
  );
}

export default Header;