import React, {
  useState,
  useContext,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from "react";
import "../styles/Characters.css";
import ThemeContext from "../context/ThemeContext";
import Search from "./Search";
import useCharacters from "../hooks/useCharacters";

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const Characters = (props) => {
  //const [characters, setCharacters] = useState([]);
  const color = useContext(ThemeContext);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);
  const [disabled, setDisabled] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const API = `https://rickandmortyapi.com/api/character/?page=${nextPage}`;
  const characters = useCharacters(API);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
    setDisabled([...disabled, favorite.id]);
  };

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  const handleNextPage = () => {
    setNextPage(nextPage + 1);
  };

  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLocaleLowerCase());
      }),
    [characters, search]
  );

  return (
    <div className="Characters">
      {favorites.favorites.length > 0 && (
        <div className="Characters_list_favorites">
          <h2 className="Characters_list_favorites_title">Favorites:</h2>
          <div className="Characters_list_favorites_data">
            {favorites.favorites.map((favorite) => (
              <li key={`fav_${favorite.id}`}>
                <img src={favorite.image} alt={favorite.name} />
              </li>
            ))}
          </div>
        </div>
      )}
      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />
      <div className="Characters_list">
        {filteredUsers.map((character) => (
          <div
            className={`Characters_card Characters_card-${color}`}
            key={character.id}
          >
            <div className="Characters_image">
              <img src={character.image} alt={character.name} />
            </div>
            <div className="Characters_details">
              <div className="Characters_description">
                <h2 className="Characters_name">{character.name}</h2>
                <h3 className="Characters_gender">
                  Gender: {character.gender}
                </h3>
                <h3 className="Characters_species">
                  Species: {character.species}
                </h3>
                <h3 className="Characters_status">
                  Status: {character.status}
                </h3>
                <h3 className="Characters_location">
                  Location: {character.location.name}
                </h3>
              </div>

              <div className="Character_button">
                <button
                  disabled={disabled.includes(character.id)}
                  className={`App_button App_button-${color}`}
                  type="button"
                  onClick={() => handleClick(character)}
                >
                  <h2>Agregar a Favoritos</h2>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {nextPage < 34 && (
        <button type="button" onClick={handleNextPage}>
          Next Page
        </button>
      )}
    </div>
  );
};

export default Characters;
