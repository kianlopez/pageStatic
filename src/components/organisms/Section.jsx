import React from 'react';
import Cards from "../molecules/Cards";
import mysql from "../../data/mysql";
import './Section.css';

function Section() {
  return (
    <div id="cards-section">
      <h1>Venta de miel "del MVZ Don Chepe"</h1>
      {mysql.contacts.map((contact, index) => (
        <Cards key={index} image={contact.image} text={contact.text} />
      ))}
    </div>
  );
}

export default Section;