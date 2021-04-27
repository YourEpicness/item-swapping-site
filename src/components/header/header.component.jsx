import React from 'react';

import './header.styles.scss';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/iss.svg';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>

    <div className="options">
      <Link className='option' to='/sales'>
        SALES
      </Link>
    </div>

    <div className="options">
      <Link className='option' to='/trade'>
        TRADE
      </Link>
    </div>

    <div className="options">
      <Link className='option' to='/cart'>
        CART
      </Link>
    </div>

    <div className="options">
      <Link className='option' to='/profile'>
        PROFILE
      </Link>
    </div>

    <div className="options">
      <Link className='option' to='/signin'>
        SIGN-IN
      </Link>
    </div>

    <div className="options">
      <Link className='option' to='/register'>
        REGISTER
      </Link>
    </div>

  </div>
);

export default Header;
