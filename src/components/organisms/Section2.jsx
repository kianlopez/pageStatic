import React from 'react';
import Card2 from "../molecules/Card2";
import mysql from "../../data/mysql";
import './Section2.css';

function Section2() {
    return (
        <div id="cards-section2">
            {mysql.contactsSection2.map((contact, index) => (
                <Card2 key={index} image={contact.image} text={contact.text} />
            ))}
        </div>
    );
}

export default Section2;