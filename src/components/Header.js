import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../components/Logo';
import GithubIcon from '../assets/github.svg';

function Header(props) {
  return (
    <>
    <NavLink activeClassName='is-active' to='/about'>
      <div style={{margin: "1em",textAlign: "center"}}>
        <Logo />
        <div>
          <h1 style={{marginTop: "0em", marginBottom: "0.3em"}}>Centered-list</h1>
          <h2 style={{marginTop: "0em"}}>Builder v1</h2>
        </div>
      </div>
    </NavLink>

    <ul id="navigation">
      <li><NavLink exact={true} activeClassName='is-active' to='/about'>About</NavLink></li>
      <li><NavLink activeClassName='is-active' to='/tool'>Make a List</NavLink></li>
    </ul>

    <div id="headerGithub">
      <a href="https://github.com/TheMangoTrain/CenteredListBuilder"><img style={{height: "2em"}} src={GithubIcon} className="logo" alt="logo" /> GitHub</a>
    </div>
    </>
  );
}

export default Header;