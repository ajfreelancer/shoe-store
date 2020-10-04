import React from 'react';
import Navbar from './Elements/Navbar';
import styled from 'styled-components';

const Div = styled.div`
  .Navbar{
    z-index: 20;
    position: relative;
    width: 100%;
    margin: auto;
    max-width: 1920px;
  }
`;

function Header() {
  return (
    <Div>
      <div className="Navbar">
        <Navbar/>
      </div>
    </Div>
  );
}

export default Header;
