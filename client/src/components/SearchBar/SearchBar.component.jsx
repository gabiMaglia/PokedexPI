import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon } from "../../Redux/Actions/actions";

import styles from "./searchBar.module.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector(state => state.AllPokemonBackupList)
  const navigate = useNavigate()
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( !isNaN(Number(input)))
    // console.log(allPokemons)
    let newPokemonToShow 
    !isNaN(Number(input))
    ? 
    newPokemonToShow = allPokemons.find((e) => {
      return e.pokemon_id === Number(input);
    })
    :
    newPokemonToShow = allPokemons.find ((e) => {
      return e.pokemon_name === input 
    });

  
    newPokemonToShow? navigate(`/detail/${newPokemonToShow.pokemon_id}`)  : 
    dispatch(fetchPokemon(input))

 
      navigate(`/detail/${Number(input)}`);
      
 

  };

  return (

      <div className={styles.buscarCaja}>
        <input type="text" onChange={handleChange} name="searchinput" className={styles.buscarTxt} placeholder="SearchPokemon..." />
        <a className={styles.buscarBtn} onClick={handleSubmit}>
          <i className="far fa-search" ></i>
        </a>
      </div>

  
  );
};

export default SearchBar;
