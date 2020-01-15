import React from 'react';
import Logo from '../components/Logo';

function Header(props) {
  return (
    <><Logo /><h2>{props.Title}</h2></>
  );
}

export default Header;