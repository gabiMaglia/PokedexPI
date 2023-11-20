import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon } from "../../Redux/Actions/actions";

import styles from "./searchBar.module.css";
import { useNavigate } from "react-router-dom";
import LoadingPokeball from "../common/LoadingPokeball";

const SearchBar = ({ handleOpenCloseNav }) => {
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

    newPokemonToShow && navigate(`/detail/${newPokemonToShow.pokemon_id}`);
    setInput("");
    handleOpenCloseNav();
  };

  return (
    <div className={styles.buscarCaja}>
      <input
        type="text"
        onChange={handleChange}
        name="searchinput"
        className={styles.buscarTxt}
        placeholder="SearchPokemon..."
        value={input}
      />
      <a className={styles.buscarBtn} onClick={handleSubmit}>
        <LoadingPokeball />
      </a>
    </div>
  );
};

export default SearchBar;
