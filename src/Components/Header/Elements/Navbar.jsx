import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 87%;
  margin: auto;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo img{
    width: 100px;
  }

    /* @media (min-width: 768px) {

      .logo img{
        width: 100px;
        position: relative;
        top: 0;
        left: 0
      }
    }

    @media (min-width: 1000px) {

        .logo img{
        width: 100px;
        position: relative;
        top: 0;
        left: 0
      }
    } */
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <img src={require("../Images/Logo.svg")} alt="KICKASS SNEAKERS"/>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
