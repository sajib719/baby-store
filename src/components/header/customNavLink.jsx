import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomNavLink = ({linkTo, linkName}) => {
  return (
   <NavLink to={linkTo} className={({isActive}) => (isActive ? "active" : "")}>
        {linkName}
    </NavLink>
  );
}

export {CustomNavLink} ;
