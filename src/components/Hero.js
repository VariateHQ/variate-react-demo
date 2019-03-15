import React from 'react';
import styled from 'styled-components'

const HeroImage = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 400px;
    background: url(${props => props.backgroundImage ? props.backgroundImage : "hero.jpg"});
    background-size: cover;
    background-position: center;
    background-color: rgb(33, 165, 197);
    
    h1 {
        color: white;
        text-shadow: 0 1px 10px rgba(42, 42, 42, 1)
    }
`;



function Hero(props) {
    return (
        <HeroImage props={props}>
            <h1>Variate React Demo</h1>
        </HeroImage>
    )
}

export default Hero;