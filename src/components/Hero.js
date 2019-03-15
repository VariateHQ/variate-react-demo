import React from 'react';
import styled from 'styled-components'

const HeroImage = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 400px;
    background-size: cover;
    background-position: center;
    background-color: rgb(33, 165, 197);
`;

function Hero() {
    return (
        <HeroImage>
            <h1>Variate React Demo</h1>
        </HeroImage>
    )
}

export default Hero;