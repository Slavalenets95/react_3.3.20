import React from 'react';
import classes from './Header.module.scss';
import logo from './logo.svg';

function Header() {
  return (
    <header className={classes.header}>
      <div className={[classes.header__logo, classes.logo].join(' ')}>
        <img src={logo} alt="airplanes logo" className={classes.logo__image} />
      </div>
    </header>
  );
}

export default Header;
