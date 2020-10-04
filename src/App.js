import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Men from './Pages/Men/Men';
import Women from './Pages/Women/Women';
import About from './Pages/About/About';
import Header from './Components/Header/Header';
import styled from 'styled-components';
import Footer from './Components/Footer/Footer';
import ProductDetails from './Pages/ProductPage/ProductDetails';

const Content = styled.div`
  top: 90px;
  width: 100%;

  .mainContentContainer{
    width: 100%;
  }

  .page{
    width: 100%;
    margin: auto;
    min-height: 100vh;
  }
`

function App() {
  return (
    <Router>
    <Header />
      <Content>
        <div className="mainContentContainer">
          <div className="page">
            <Routes>
              <Route path="/" element={ <Homepage /> } />
              <Route path="/men" element={ <Men /> } />
              <Route path="/women" element={ <Women /> } />
              <Route path="/about" element={ <About /> } />
              <Route path="/about" element={ <About /> } />
              <Route path="/product/:prodName" element={ <ProductDetails /> } />
            </Routes>
          </div>
        </div>
      </Content>
    <Footer />
    </Router>
  );
}

export default App;
