import React from 'react';

function Footer() {
  return (
    <div id="footer">
      <div>Copyright &copy; {(new Date().getFullYear())}&nbsp;<a href="https://kreation.ca">Kal Erikson</a> • <a href="https://github.com/TheMangoTrain/centeredliststyler">GitHub</a></div>
    </div>
  );
}

export default Footer;