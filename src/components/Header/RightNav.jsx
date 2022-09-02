import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  flex-flow: row nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    padding: 18px 10px;
    font-weight: 600;
    font-stretch: expanded;
    cursor: pointer;
  }
  li:hover{
    text-underline-offset: 4px;
    text-decoration: underline;
  }

  @media (max-width: 1000px) {
    flex-flow: column nowrap;
    background-color: #2b2b23;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;


    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>Services</li>
      <li>Client Work</li>
      <li>About</li>
      <li>Journal</li>
      <li>Hire Me</li>
    </Ul>
  )
}

export default RightNav
