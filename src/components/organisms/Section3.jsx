import React from 'react';
import Card3 from "../molecules/Card3";
import mysql from "../../data/mysql";
import './Section3.css';

function Section3() {
    return (
        <div id="cards-section3">
            {mysql.contactsSection3.map((contact, index) => (
                <Card3 key={index} image={contact.image} text={contact.text} />
            ))}
        </div>
    );
}

export default Section3;