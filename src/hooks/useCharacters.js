import { useState, useEffect } from "react";

const useCharacters = (url) => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    try {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setCharacters(data.results));
    } catch (err) {
      console.log(err);
    }
  }, [url]);
  return characters;
};

export default useCharacters;
