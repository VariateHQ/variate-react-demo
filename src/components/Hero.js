import React from 'react';
import { useVariate } from '@variate/react';
import styled from 'styled-components';

const HeroImage = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 400px;
    background: url(${({ backgroundImage }) => backgroundImage });
    background-size: cover;
    background-position: center;
    background-color: rgb(33, 165, 197);
    h1 {
        color: white;
        text-shadow: 0 1px 10px rgba(42, 42, 42, 1)
    }
`;

function Hero({ defaultContent }) {
    const { content } = useVariate('HomeHero', defaultContent);

    return (
        <HeroImage { ...content }>
            <h1>{content.headline}</h1>
        </HeroImage>
    )
}

Hero.defaultProps = {
    defaultContent: {
        headline: 'This is the original boring headline, it would be awesome if we tested it!',
        backgroundImage: 'hero.jpg'
    }
};

export default Hero;
