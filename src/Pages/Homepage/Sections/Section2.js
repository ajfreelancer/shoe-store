import React from 'react'
import styled from 'styled-components';
import ShoesBox from '../../../Components/ShoesBox/ShoesBox';
import FeaturedSneakers from '../Data/FeaturedSneakers';
import Fade from 'react-reveal/Fade';

const Div = styled.div`
    position: relative;
    width: 87%;
    margin: auto;
    padding: 50px 0;

    .title{
        font-family: Montserrat;
        font-size: 27px;
        letter-spacing: -0.02em;
        color: #000000;
        width: fit-content;
        margin: auto;
        padding: 25px 0;
    }
    .featured{
        font-weight: 500
    }
    .sneakers{
        font-weight: 700
    }
    .grid-container{
        display: grid;
        margin-top: -5px;
        margin: auto;
        justify-items: center;
        grid-column-gap: 20px;
        grid-row-gap: 25px;
    }
    .grid-item{
        background: #F3F3F3;
        box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.13);
        border-radius: 22px;
        font-weight: 500;
        letter-spacing: -0.02em;
        width: fit-content;
    }
    .grid-item img{
        width: 100%
    }
    .grid-item .name{
        font-size: 20px;
        margin: 6px 0 0 19px;
    }
    .grid-item .cat{
        font-size: 17px;
        color: #505050;
        margin: 2px 0 0 19px;
    }
    .grid-item .readmore{
        color: #111111;
        font-size: 16px;
        margin: 6px 0 16px 19px;
    }
  @media (min-width: 768px) {
    .grid-container{
        grid-template-columns: 33% 33% 33%;
        max-width: 896px;
    }
    .title{
        padding: 50px 0;
        font-size: 33px;
    }
    .grid-item{
        box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.23);
    }
  }
`;

function Section2() {   

    return (
        <Div>
            <div className="title">
                <span className="featured">FEATURED </span>
                <span className="sneakers">SNEAKERS</span>
            </div>
            <Fade bottom>
                <div className="grid-container">
                    {
                        FeaturedSneakers().map(({img, name, cat}, i) => {
                            return(
                                <ShoesBox img={img} name={name} cat={cat} i={i} key={i}/>
                            )
                        })
                            
                    }
                </div>
            </Fade>
            
        </Div>
    )
}

export default Section2
