import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const Div = styled.div`
    
    .grid-container{
        display: grid;
        grid-template-columns: 100%;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }
    .grid-item:nth-child(1){ order: 1 }
    .grid-item:nth-child(2){ order: 3 }
    .grid-item:nth-child(3){ order: 2 }
    .last-item{
        height: 90vw;
        /* width: 100%; */
        object-fit: none;
        background-image: url(${require("../images/section1RightImage.png")});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .aboutus{
        background-color: #0A0A0A;
        padding: 21px 25px 24px;
        border-right: none;
    }
    .second-item{
        margin: auto;
        width: 100%;
    }
    .aboutus .heading{
        font-size: 33px;
        color: #FC0825;
        font-weight: 600;
    }
    .heading .about{
        font-weight: 400;
        color: white
    }
    .aboutus .description{
        color: white;
        font-weight: 300;
        font-size: 17px;
        line-height: 27px;
        margin-top: 3px;
    }
    @media (min-width: 500px){
        .aboutus{
            padding-bottom: 27px; 
        }
    }
    @media (min-width: 768px){
        .grid-container{
            display: grid;
            grid-template-columns: 6.5% 43.5% 50%;
            grid-column-gap: 0px;
            grid-row-gap: 0px;
        }
        .grid-item:nth-child(1){ order: 1 }
        .grid-item:nth-child(2){ order: 2 }
        .grid-item:nth-child(3){ order: 3 }
        .aboutus .heading{
            font-size: 40px;
        }
        .aboutus .description{
            font-weight: 200;
            font-size: 15px;
            line-height: 23px;
        }
        .last-item{
            height: 370px;
        }
        .aboutus{
            border: 4px solid #CA021C;
            border-right: none;
        }
    }
    @media (min-width: 928px){
        .aboutus .heading{
            font-size: 40px;
        }
        .aboutus .description{
            font-size: 19px;
        }
    }
    @media (min-width: 1105px){
        .aboutus .heading{
            font-size: 45px;
        }
        .aboutus .description{
            font-size: 20px;
            line-height: 32px;
        }
        .last-item{
            height: 525px;
        }
        .aboutus{
            padding: 35px 40px 47px;

        }
    }
    @media (min-width: 1290px){
        .aboutus .heading{
            font-size: 45px;
        }
        .aboutus .description{
            font-size: 20px;
            line-height: 28px;
        }
        .last-item{
            height: 525px;
        }
        .aboutus{
            padding: 75px 50px;

        }
        .aboutus{
            border: 7px solid #CA021C;
            border-right: none;
        }
    }
    @media (min-width: 1400px){
        .aboutus .heading{
            font-size: 60px;
        }
        .aboutus .description{
            font-size: 28px;
            line-height: 37px;
        }
        .last-item{
            height: 600px;
        }
        .aboutus{
            padding: 27px 35px 34px;

        }
    }
    @media (min-width: 1543px){
        .aboutus{
            padding: 40px 50px 50px;

        }
    }
    @media (min-width: 1635px){
        .aboutus{
            padding: 70px 60px 80px;
        }
        .aboutus .description{
            line-height: 40px;
        }
        .last-item{
            height: 700px;
        }
    }
    @media (min-width: 1800px){
        .aboutus{
            padding: 80px 60px 90px;
        }
        .aboutus .description{
            line-height: 42px;
            font-size: 30px;
        }
    }
    @media (min-width: 1900px){
        .aboutus{
            padding: 80px 60px 90px;
        }
        .aboutus .description{
            line-height: 42px;
            font-size: 30px;
        }
        .grid-container .first-item{
            display: none;
        }
        .grid-container{
            max-width: 1660px;
            margin: auto;
            grid-template-columns: 45% 55%;
        }
    }
`

function Section1() {
    return (
        <Div>
            <div className="grid-container">
                <div className="grid-item first-item"></div>
                <div className="grid-item second-item">
                    <div className="aboutus">
                        <Fade right>
                            <div className="heading">
                                <span className="about">ABOUT </span>US
                            </div>
                            <div className="description">
                                Our mission is what drives us to do everything possible to expand human potential. We do that by creating groundbreaking sport innovations, by making our products more sustainably, by building a creative and diverse global team and by making an impact in communities where we live and work.
                            </div>
                        </Fade>
                    </div>
                </div>
                <div className="grid-item last-item">
                </div>
            </div>
        </Div>
    )
}

export default Section1
