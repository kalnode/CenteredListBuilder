import React from 'react';
import logo from '../assets/logo.svg';

function LogoImage() {
  return (
    <img style={{height: "4em", margin: "1em"}} src={logo} className="logo" alt="logo" />
  );
}

export default LogoImage;