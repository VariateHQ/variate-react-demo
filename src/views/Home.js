import React from 'react';
import Hero from "../components/Hero";
import HomeContent from "../components/HomeContent";

function Home() {
    return (
        <div className="home">
            <Hero/>
            <HomeContent/>
        </div>
    )
}

export default Home;