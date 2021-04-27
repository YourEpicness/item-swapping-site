import React from 'react';

import './navigation.styles.scss';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/iss.svg';

const Navigation = () => (
  <div className='navigation'>
  <nav class="stroke">
    <ul>
      <Link className='option' to='/'> <Logo/> </Link>
      <li><Link className='option' to='/sales'> SALES </Link></li>
      <li><Link className='option' to='/trade'> TRADE </Link></li>
      <li><Link className='option' to='/cart'> CART </Link></li>
      <li><Link className='option' to='/profile'> PROFILE </Link></li>
      <li><Link className='option' to='/signin'> SIGNIN </Link></li>
      <li><Link className='option' to='/register'> REGISTER </Link></li>
    </ul>
  </nav>
  </div>
);

export default Navigation;
