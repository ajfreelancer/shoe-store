import React from 'react'
import Section1 from './Sections/Section1'
import styled from 'styled-components';

const Div = styled.div`
    max-width: 1670px;
    margin: auto;
    width: 87vw;
`

function Women() {
    return (
        <Div>
            <Section1 />
        </Div>
    )
}

export default Women
