import React, { useState, useEffect } from "react";
import "../styles/Characters.css";

const Characters = (props) => {
  const [characters, setCharacters] = useState([]);
  const { mode } = props;
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="Characters">
      {characters.map((character) => (
        <div
          className={`Characters_card Characters_card-${mode}`}
          key={character.id}
        >
          <div className="Characters_image">
            <img src={character.image} alt={character.name} />
          </div>
          <div className="Characters_description">
            <h2 className="Characters_name">{character.name}</h2>
            <h3 className="Characters_gender">Gender: {character.gender}</h3>
            <h3 className="Characters_species">Species: {character.species}</h3>
            <h3 className="Characters_status">Status: {character.status}</h3>
            <h3 className="Characters_location">
              Location: {character.location.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
