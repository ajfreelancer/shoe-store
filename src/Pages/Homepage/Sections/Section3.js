
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
    .aboutLine{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 800;
        font-size: 8vw;
        margin-top: 80px;
    }
    .sneakers, .passion{
        width: 87%;
        margin: auto;
    }
    .passion{
        color: white;
        padding-top: 3px;
    }
    .passion span{
        font-weight: 400;
    }
    .blackBG{
        background-color: black;
        position: relative;
    }
    .groupAboutUs{
        color: white;
        width: fit-content;
        margin: auto;
        text-align: center;
        font-weight: 500;
        font-size: 20px;
        padding: 40px 0 20px 0;
    }
    .groupAboutUs a{
        text-decoration: none;
    }
    .aboutUs{
        border: 2px solid white;
        border-radius: 40px;
        padding: 3px 25px;
        margin-top: 2px;
        color: white;
    }
    .findMore{
        font-size: 18px;
    }

    @media (min-width: 768px){
        .aboutLine{
            font-weight: 700;
        }
    }
    @media (min-width: 1024px){
        .sneakers, .passion{
            max-width: 896px;
            font-size: 90px;
        }
        .passion{
            padding-top: 0px;
            margin-top: -5px;
        }
        .findMore{
            font-size: 21px;
        }
        .aboutUs{
            font-size: 22px;
            padding: 6px 29px;
        }
        .groupAboutUs{
            padding: 70px 0 50px 0;
        }
    }
`

function Section3() {
    return (
        <Div>
            <div className="aboutLine">
                <div className="sneakers">SNEAKERS</div>
                <div className="blackBG">
                    <div className="passion">
                        <span>ARE OUR </span> PASSION
                    </div>
                    <div className="groupAboutUs">
                        <div className="findMore">FIND MORE</div>
                        <Link to="/about"><div className="aboutUs">ABOUT US</div></Link>
                    </div>
                </div>
            </div>
        </Div>
    )
}

export default Section3