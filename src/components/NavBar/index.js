import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import NavContainer from './NavBar';
import { FaBars } from 'react-icons/fa';
import { Links } from '../../utils/constants';
import CartButtons from '.././CartButton';
import { useUserContext } from '../../context/user_context';
import '../../index.css';

export const NavBar = () => {
  // const {myUser } = useUserContext();
  const myUser = null;

  console.log(myUser)
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
        <NavLink to="/"
        > logo</NavLink>
      {/* <FaBars /> */}
        </div>
          <ul className="nav-links">
          {Links.map((link) => {
            const {id, text, url} = link;
            return (
              <li key={id}>
                <NavLink 
                  to={url}
                  exact
                  className="links"
                  activeClassName="navbar__link--active">{text}</NavLink>
              </li>
            )
          })}
          {
            myUser && (
              <li>
                <Link to="/checkout">checkout</Link>
              </li>
            )
          }
        </ul>
      <CartButtons />
    </div>
    </NavContainer>
  )
}
