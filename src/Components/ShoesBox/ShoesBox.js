import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`

    padding-bottom: 5px;
    
    img{
        width: 100%;
        border-radius: 20px 20px 0 0;
    }
    .name{
        font-size: 20px;
        margin: 6px 0 0 19px;
    }
    .cat{
        font-size: 17px;
        color: #505050;
        margin: 2px 0 0 19px;
    }
    .readmore{
        color: #111111;
        font-size: 16px;
        margin: 6px 0 16px 19px;
    }
    a{
        text-decoration: none;
    }
`

function ShoesBox({img, name, cat, i}) {
    return (
            <Div className="grid-item" key={i}>
                <img src={img} alt=""/>
                <div className="name">{name}</div>
                <div className="cat">{cat}</div>
                <NavLink to={`../product/${name}`} ><div className="readmore">Read more...</div></NavLink>
            </Div>
    )
}

export default ShoesBox
