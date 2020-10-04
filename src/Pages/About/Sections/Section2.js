import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const Div = styled.div`
    .grid-container{
        display: grid;
        grid-template-columns: auto;
    }
    .grid-item:nth-child(1){
        background-image: url(${require("../images/section2LeftImage.png")});
        background-repeat: no-repeat;
        background-size: cover;
        height: 85vw;
        position: relative;
        left: -30px;
        margin: 40px 0;
        order: 2;
    }
    .grid-item:nth-child(2){
        padding: 25px 25px 10px 25px;
        order: 1;
    }
    .title{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 29px;
        line-height: 44px;
        letter-spacing: 0.215em;
        color: #000000;
    }
    .border{
        border-bottom: 3px solid #E90823;
        width: 140px;
        margin-top: 4px;
    }
    .statement{
        font-family: Oswald;
        font-size: 35px;
        font-weight: 500;
        margin: 14px 0 5px 0;
        max-width: 300px;
    }
    .dare{
        color: #E90823;
    }
    .description{
        font-weight: 500;
        font-size: 20px;
        /* max-width: 312px; */
        display: block;
    }
    .description1{
        display: none;
    }
    
    @media (min-width: 768px){
        .description1{
            display: block;
        }
        .description{
            display: none;
        }
        .grid-container{
            grid-template-columns: 55% 45%;
            margin: 30px 0;
        }
        .grid-item:nth-child(1){ 
            order: 1;
            height: 45vw;
        }
        .grid-item:nth-child(2){ 
            order: 2;
            margin: auto;
            padding-left: 10px;
            padding-right: 54px;
        }
    }
    @media (min-width: 1000px){
        .grid-item:nth-child(2){
            padding-left: 0px;
            margin-left: 30px;
        }
    }
    @media (min-width: 1100px){
        .grid-item:nth-child(2){
            margin: auto 0px;
            margin-left: 20px;
            margin-right: 100px;
            padding: 0px;
        }
        .title{
            font-size: 35px;
        }
        .statement{
            font-size: 44px;
            max-width: fit-content;
        }
        .description1{
            font-size: 23px;
            max-width: none;
        }
        .border{
            border-bottom-width: 5px;
        }
    }
    @media (min-width: 1300px){
        .grid-item:nth-child(2){
            transform: scale(1.1);
            margin-left: 40px;
        }
        .statement{
            line-height: 55px;
        }
        .description1{
            font-size: 18px;
            margin-top: 10px;
        }
        .grid-container{
            margin-top: 100px;
            margin-bottom: 100px;
        }
    }
    @media (min-width: 1450px){
        .grid-item:nth-child(2){
            transform: scale(1.2);
            margin-left: 100px;
        }
    }
    @media (min-width: 1600px){
        .grid-item:nth-child(2){
            transform: scale(1.3);
            margin-left: 120px;
        }
    }
    @media (min-width: 1700px){
        .grid-item:nth-child(2){
            transform: scale(1.4);
            margin-left: 160px;
        }
    }
    @media (min-width: 1900px){
        .grid-item:nth-child(2){
            transform: scale(1.4);
            margin-left: 180px;
            max-height: 855px;
            max-width: 1045px;
        }
        .grid-container{
            max-width: 1900px;
            margin: auto;
        }
    }
`

function Section2() {
    return (
        <Div>
           <div className="grid-container">
               <Fade left>
                    <div className="grid-item">
                    </div>
               </Fade>
               <Fade>
                    <div className="grid-item">
                        <div className="title">
                                INNOVATION
                        </div>
                        <div className="border"></div>
                        <div className="statement">
                                WE <span className="dare">DARE</span> TO DESIGN <br />FOR SPORTS
                        </div>
                        <div className="description">
                                To make big leaps, we take big 
                                risks. Learn more about Nike's
                                innovation team, platforms
                                and partnerships.
                        </div>
                        <div className="description1">
                                To make big leaps, we take big<br /> 
                                risks. Learn more about Nike's<br />
                                innovation team, platforms<br />
                                and partnerships.<br />
                        </div>
                    </div>
               </Fade>
           </div> 
        </Div>
    )
}

export default Section2
