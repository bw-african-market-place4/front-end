import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarDiv, NavbarUl, NavbarLi, NavbarLink } from '../styled/Styled'

const Navbar = () => {
  return (
    <NavbarDiv>
       <NavbarUl>
          <NavbarLi><Link to='/'> Login</Link></NavbarLi>
          <NavbarLi><Link to='/register'>Register</Link></NavbarLi>
        </NavbarUl>
    </NavbarDiv>
  )
}

export default Navbar
