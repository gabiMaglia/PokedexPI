import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon } from "../../Redux/Actions/actions";

import styles from "./searchBar.module.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.AllPokemonBackupList);
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(!isNaN(Number(input)));

    let newPokemonToShow;

    if (!isNaN(Number(input))) {
      // aca entra si es num
      newPokemonToShow = allPokemons.find((e) => {
        return e.pokemon_id === Number(input);
      });
      newPokemonToShow?.length
        ? navigate(`/detail/${newPokemonToShow.pokemon_id}`)
        : dispatch(fetchPokemon(input));
    } else {
      // aca si es name
      newPokemonToShow = allPokemons.find((e) => {
        return e.pokemon_name.toLowerCase() === input.toLowerCase();
      });

      if (newPokemonToShow !== undefined) {
        navigate(`/detail/${newPokemonToShow.pokemon_id}`);
      } else {
        dispatch(fetchPokemon(input));
      }
    }

    navigate(`/detail/${newPokemonToShow.pokemon_id}`);
  };

  return (
    <div className={styles.buscarCaja}>
      <input
        type="text"
        onChange={handleChange}
        name="searchinput"
        className={styles.buscarTxt}
        placeholder="SearchPokemon..."
      />
      <a className={styles.buscarBtn} onClick={handleSubmit}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
        >
          <path
            d="M 30 50
		a 1 1 1 0 1 40 0
		h-12.5
		a 1 1 1 0 0 -15 0
		z"
            fill="#f00"
            stroke="#222"
          ></path>
          <circle cx="50" cy="50" r="5" fill="#222" stroke="#222"></circle>
          <path
            d="M 30 50
		a 1 1 1 0 0 40 0
		h-12.5
		a 1 1 1 0 1 -15 0
		z"
            fill="#fff"
            stroke="#222"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default SearchBar;
