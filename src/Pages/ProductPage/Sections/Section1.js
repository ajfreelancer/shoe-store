import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { featuredShoes, MenShoes, WomenShoes } from '../../../Data/data';

const Div = styled.div`
    margin: auto;
    a{
        text-decoration: none;
    }
    .grid-container{
        display: grid;
        margin: auto;
        grid-template-columns: auto;
        /* margin: 25px 50px; */
        /* gap: 10px; */
    }

    .prod-image img{
        width: 100%;
    }
    .second-title{
        width: 87%;
        margin: auto;
    }
    .title{
        margin-bottom: 8px;
    }
    .price{
        color: #222222;
        font-size: 26px;
        margin: 5px 0 10px 0;
    }
    .desc{
        font-size: 18px;
    }
    .descT{
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 4px;
    }
    .button{
        /* background-color: black; */
        border: 2px solid black; 
        color: black;
        padding: 8px 20px;
        font-size: 20px;
        font-weight: 600;
        width: fit-content;
        border-radius: 50px;
        margin: 12px 0 35px 0;
        transition-duration: 0.25s;
    }
    .button:hover{
        background-color: black;
        color: white;
    }
    .button:active{
        background-color: white;
        color: black;
    }
    @media (min-width: 767px) {
        .title{
            font-size: 36px;
        }
        .price{
            font-size: 30px;
        }
        .desc{
            font-size: 21px;
        }
        .descT{
            font-size: 24px;
        }
        .button{
            font-size: 20px;
        }
    }
    @media (min-width: 1000px) {
        margin: 25px 40px;
        .grid-container{
            grid-template-columns: 48% 48%;
            width: 87%;
            gap: 4%;
            max-width: 879px;
        }
        .second-title{
            margin: 0;
            width: 100%;
        }
        .title{
            margin: 0;
        }
        .desc{
            font-size: 18px;
            /* text-align: justify; */
        }
    }
`

function findShoes(prodName) {
    let gfeaturedShoes = featuredShoes().filter((val) => val.name === prodName);
    if( gfeaturedShoes.length === 0){
        let gMenShoes = MenShoes().filter((val) => val.name === prodName);
        if( gMenShoes.length === 0){
            let gWomenShoes = WomenShoes().filter((val) => val.name === prodName);
            if( gWomenShoes.length === 0){
                return null;
            }
            else{
                return gWomenShoes[0];
            }
        }
        else{
            return gMenShoes[0];
        }
    }
    else{
        return gfeaturedShoes[0];
    }
}

function Section1({prodName}) {

    // console.log(featuredShoes(), MenShoes(), WomenShoes());
    let shoeData = findShoes(prodName);
    console.log(shoeData);
    if(shoeData != null){
        return (
            <Div>
                <div className="grid-container">
                    <div className="grid-item prod-image">
                        <img src={shoeData.img} alt=""/>
                    </div>
                    <div className="grid-item second-title">
                        <h1 className="title">{shoeData.name}</h1>
                        <h2 className="price">$ {Math.floor(Math.random() * 1000) + 100}</h2>
                        <div className="descT">Description</div>
                        <div className="desc">Lorem ipsum dolor sit amet consectetur a elit. Aliquid culpa, possimus voluptatem nobis ad suscipit. Repellat quo quod, magnam ut velit non, assumenda error commodi blanditiis quis et eaque nihil!Nisi sit, quisquam ut expedita illum amet qui tempore aliquid cumque quae, voluptatum praesentium est nihil accusantium voluptates dolorum corrupti? Consequuntur dolore reiciendis earum fuga laudantium debitis tenetur adipisci veniam?</div>
                        <NavLink to="/about"><div className="button">VISIT US</div></NavLink>
                    </div>
                </div>
            </Div>
        )
    }else{
        return(
            <div>
                Not Found
            </div>
        )
    }

    
}

export default Section1
