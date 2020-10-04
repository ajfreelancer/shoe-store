import React from 'react'
import styled from 'styled-components';
import ShoesBox from '../../../Components/ShoesBox/ShoesBox';
import { WomenShoes, MenShoes } from '../../../Data/data';
import Fade from 'react-reveal/Fade';

const Div = styled.div`
    width: 100%;
    margin: auto;
    .title{
        margin-top: 10px;
        margin-bottom: 25px;
        font-size: 28px;
        font-weight: 500;
    }
    .bold{
        font-weight: 800;
    }
    .grid-container{
        display: grid;
        margin-top: -5px;
        /* margin: auto; */
        justify-items: center;
        grid-column-gap: 20px;
        grid-row-gap: 25px;
        margin-bottom: 25px;
        width: 100%;
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
        width: 100%;
        height: 265px;
        object-fit: none;
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
            grid-template-columns: 50% 50%;
            grid-column-gap: 35px;
            grid-row-gap: 30px;
            width: 95.5%;
            margin-bottom: 80px;
        }
        .grid-item{
            box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.23);
        }
        .grid-item img{
            height: 330px;
        }
        .title{
            margin: 30px 0;
        }
    }
    @media (min-width: 1100px) {
        .grid-container{
            grid-template-columns: 50% 50%;
            grid-column-gap: 30px;
            grid-row-gap: 30px;
            width: 96.5%;
        }
        .grid-item{
            box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.23);
        }    
    }
    @media (min-width: 1307px) {
        .grid-container{
            grid-template-columns: 25% 25% 25% 25%;
            width: 91.5%;
        }
        .grid-item{
            box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.17);
            border: 1px solid #CCCCCC;
        }    
    }
    @media (min-width: 1722px) {
        .grid-container{
            grid-template-columns: 20% 20% 20% 20% 20%;
            width: 91.5%;
            max-width: 1569px;
        }
        .grid-item{
            box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.17);
            border: 1px solid #CCCCCC;
        }    
    }
`

function Section1() {
    // const unsplash = new Unsplash({ accessKey: "43Dc-cx5zElSAgYjKWwjd-Al7Akub1yTEi0NgLeFGJc" });
    // let data = [];
    // unsplash.search.photos("sneaker women", 1, 30, {})
    //     .then(toJson)
    //     .then(({results}) => {
    //         let {urls, user} = results;
    //         results.map(({urls, user}) => {
    //             let toBePushed = {
    //                 img: (urls.regular),
    //                 name: (user.first_name),
    //                 cat: "Mens' Shoe"
    //             }
    //             data.push(toBePushed);
    //             return(0)
    //         })
            
    //     });
    // console.log(data);
    let ShoesToBeShown = WomenShoes().concat(MenShoes());
    return (
        <Div>
            <div className="title">
                <span className="bold">WOMENS'</span> COLLECTION
            </div>
            <Fade bottom>
                <div className="grid-container">
                {
                    ShoesToBeShown.map( ({img, name, cat}, i) => {
                        return(
                            <ShoesBox img={img} name={name} cat={cat} i={i} />
                            
                        )
                    } )
                }
                </div>
            </Fade>
        </Div>
    )
}

export default Section1
