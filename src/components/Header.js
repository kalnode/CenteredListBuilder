import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../components/Logo';

function Header(props) {
  return (
    <>
    <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center"}}>
      <Logo />
      <div>
        <h1 style={{marginBottom: "0.3em"}}>Centered-list</h1>
        <h2 style={{marginTop: "0em"}}>Styling Tool</h2>
      </div>
    </div>

    <ul id="navigation">
      <li><NavLink exact={true} activeClassName='is-active' to='/about'>About</NavLink></li>
      <li><NavLink activeClassName='is-active' to='/tool'>Make a List</NavLink></li>
    </ul>
    </>
  );
}

export default Header;