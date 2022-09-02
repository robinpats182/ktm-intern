import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  background-color: #f2ecde;
  height: 65px;
  border-bottom: 1px solid #27291d;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Portland Designs
      </div>

      <Burger />
    </Nav>
  )
}

export default Navbar
