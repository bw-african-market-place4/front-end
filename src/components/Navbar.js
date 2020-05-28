import React from 'react'
//import { Link } from 'react-router-dom'
import { NavbarDiv, NavbarUl, NavbarLi, NavbarLink } from '../styled/Styled'

const Navbar = () => {
  return (
    <NavbarDiv>
       <NavbarUl>
          <NavbarLi><NavbarLink to='/'>Login</NavbarLink></NavbarLi>
          <NavbarLi><NavbarLink to='/register'>Register</NavbarLink></NavbarLi>
        </NavbarUl>
    </NavbarDiv>
  )
}

export default Navbar
