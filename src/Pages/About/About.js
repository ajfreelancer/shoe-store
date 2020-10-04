import React from 'react'
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2'
import styled from 'styled-components';

const Div = styled.div`
    width: 100%;
`

function About() {
    return (
        <Div>
            <Section1 />
            <Section2 />
        </Div>
    )
}

export default About
