import {TweenMax} from 'gsap';
import React, { useRef, useEffect } from 'react'
import styled from 'styled-components';

const Div = styled.div`

  width: 87%;
  max-width: 1670px;
  margin: auto;
  .backCircle{
    position: absolute;
    width: 900px;
    left: 220.5px;
    top: -100px;
    z-index: 0;
    display: none;
  }

  .container{
    margin: 0;
    position: relative;
    z-index: 1;
    width: 100%;
  }

  .content{
    width: 326px;
    display: grid;
    grid-row-gap: 50px;
    grid-template-columns: 100%;
    margin: auto;
  }
  .c1, .c4{
    display: none;
  }
  .rectangle{
    display: none;
    /* opacity: 1; */
  }
  .shoe{
    width: 100%;
    position: relative;
    top: -90px;
    /* display: none; */
  }
  .desc{
    position: relative;
    top: -135px;
  }
  .content .c2,.c3{
    height: 260px;
  }

  .shoeNumber{
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 60px;
    line-height: 90px;
    letter-spacing: -0.075em;
    color: #8339cc;
  }

  .desc{
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    text-align: right;
  }
  .desc div:nth-child(1){
    font-weight: 400;
  }
  .leftBox .desc div{
    color: #8339cc;
  }
  .rightBox .desc div{
    color: #2B6BB4;
  }

  @media (min-width: 480px) {
    .backCircle{
      display: block;
      width: 80vw;
      left: 10%;
    }
  }
  
  @media (min-width: 768px) {
    .backCircle{
      display: block;
      width: 80vw;
      left: 10%;
    }
    .content{
      width: fit-content;
      display: grid;
      grid-column-gap: 14px;
      grid-template-columns: auto auto;
      margin: auto;
    }
    
    .shoeNumber, .shoe, .desc{
      transition: 1s;
    }

    .content .c2, .c3{
      height: 400px;
    }
    .c2{
      align-self: end;
    }
    .shoeNumber{
      width: fit-content;
      left: 45px;
      position: relative;
      z-index:2;
      color: white;
      font-weight: 600;
      font-size: 50px;
    }
    .rectangle{
      display: inline-block;
      width: 250px;
      position: relative;
      top: -120px;
    }
    .shoe{
      width: 250px;
      top: -450px;
    }
    .desc{
      top: -407px;
      left: 45px;
      position: relative;
      text-align: left;
      width: fit-content;
    }
    .leftBox .desc{
      top: -430px;
    }
    .leftBox .desc div{
      color: white;
    }
    .rightBox .desc div{
      color: white;
    }
    .rightBox{
      top: 39px;
      width: 252px;
      position: relative;
      height: 362.656px;
    }
    .rightBox .shoe{
      top: -428px;
    }
    .leftBox{
      /* right: 80px; */
      height: 400.656px;
      width: 252px;
      position: relative;
    }
    .container{
      margin: 50px 0 0 0;
    }
  }
  @media (min-width: 1024px) {
    .content{
      grid-template-columns: auto auto auto auto;
      width: 100%;
    }
    .c1, .c4{
      display: block;
      margin: auto;
    }
    .c2{
      justify-self: right;
    }
    .c1{
      width: fit-content;
      writing-mode: vertical-rl;
      transform: rotate(-180deg);
      font-size: 33px;
      font-weight: 600;
      text-transform: uppercase;
      text-align: right;
      margin-top: 80px;
      margin-left: 20%;
      /* width: 100px; */
    }
    .discover{
      font-size: 40px;
      font-weight: 700;
    }
    .discover span{
      font-size: 30px;
    }
    .brands img{
      width: 65px;
    }
  }  
  @media (min-width: 1300px) {
    .container{
      height: 522.844px;
    }
    .backCircle{
      display: block;
      width: 70vw;
      left: 17%;
    }
    .content .c2, .content .c3{
      transform: translateY(2px);
      transform: scale(1.3) translateY(45px);
    }
    .content{
      grid-column-gap: 80px;
    }
    .content .c1{
      margin-top: 130px;
    }
    .content .c4{
      margin-top: 230px;
    }
  }  
  @media (min-width: 1200px) {
    .backCircle{
      display: block;
      width: 70vw;
      left: 15%;
      top: -200px;
    }
  } 
`;

function Section1() {

    let rect1 = useRef(null);
    let rect2 = useRef(null);

    useEffect(() => {
      TweenMax.from(
        [rect1, rect2],1,
        {
          top: 1000,
          ease: "back.out(0.5)"
        }
      )
    }, [])

    return (
        <Div>
            <img className="backCircle" src={require("../images/backCircle.svg")} alt=""/>
            <div className="container">
              <div className="content">
                  <div className="c1">
                    <div className="discover">
                    <span>▲</span>Discover
                    </div>
                  </div>
                  <div className="c2">
                    <div className="leftBox" ref={element => {rect1 = element}}>
                      <div className="shoeNumber">01</div>
                      <img className="rectangle" src={require("../images/Rectangle 2.svg")} alt="rectangle"/>
                      <img id="shoe1" className="shoe" src={require("../images/PurpleShoes.png")} alt="Purple Shoes"/>
                      <div className="desc">
                        <div>Riverian</div>
                        <div>$99.99</div>
                      </div>
                    </div>      
                  </div>
                  <div className="c3">
                    <div className="rightBox" ref={element => {rect2 = element}}>
                      <div className="shoeNumber">02</div>
                      <img className="rectangle" src={require("../images/Rectangle 1.svg")} alt="rectangle"/>
                      <img className="shoe" src={require("../images/BlueShoes.png")} alt="Blue Shoes"/>
                      <div className="desc">
                        <div>Octavian</div>
                        <div>$109.99</div>
                      </div>
                    </div>
                  </div>
                  <div className="c4">
                    <div className="brands">
                      <img src={require("../images/brands.svg")} alt=""/>
                    </div>
                  </div>
                            
                  
              </div>
            </div>
        </Div>
    )
}

export default Section1
