import React from 'react';
import Section from "../components/organisms/Section";
import Section2 from "../components/organisms/Section2";
import Section3 from "../components/organisms/Section3";
import './Home.css';

function Home() {
    return (
        <div id="div__div-section">
            <Section />
            <Section2 />
            <Section3 />
        </div>
    );
}

export default Home;