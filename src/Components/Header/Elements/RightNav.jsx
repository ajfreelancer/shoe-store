import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import "./RightNav.css"

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  /* z-index: 20; */

  .li {
    padding-left: 26px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #111111;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    margin: 0px;
    flex-flow: column nowrap;
    background-color: #000;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(-1)' : 'translateX(100%)'};
    top: -23px;
    right: -1px;
    height: 100vh;
    width: 200px;
    padding-top: 50px;
    padding-left: 0px;
    transition: transform 0.3s ease-in-out;

    .li {
      color: #fff;
      text-align: left;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 27px;
      letter-spacing: 1px;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <NavLink activeClassName="activeLinkClass" className="li" to="/" end>Home</NavLink>
      <NavLink activeClassName="activeLinkClass" className="li" to="men" >Men</NavLink>
      <NavLink activeClassName="activeLinkClass" className="li" to="women" >Women</NavLink>
      <NavLink activeClassName="activeLinkClass" className="li" to="about" >About</NavLink>
    </Ul>
  )
}

export default RightNav
