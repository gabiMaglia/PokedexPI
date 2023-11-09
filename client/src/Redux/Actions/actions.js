import { FETCH_POKEMON, FETCH_ALL_POKEMON, FETCH_ALL_POKEMON_TYPE } from "./action-types";
import {
    fetchPokemonService,
    fetchAllPokemonService,
    fetchAllPokemonTypeService,
    fetchAllPokemonbySeasonService
} from "../../services/pokemonServices";

export const fetchPokemon = (name) => {
  return (dispatch) => {
    fetchPokemonService(name).then((data) => {
      return dispatch({
        type: FETCH_POKEMON,
        payload: data,
      });
    });
  };
};
export const fetchAllPokemon = () => {
  return (dispatch) => {
    fetchAllPokemonService().then(({data}) => {
      return dispatch({
        type: FETCH_ALL_POKEMON,
        payload: data,
      });
    });
  };
};
export const fetchAllPokemonbySeason = (season) => {
  return (dispatch) => {
    fetchAllPokemonbySeasonService(season).then(({data}) => {
      return dispatch({
        type: FETCH_ALL_POKEMON,
        payload: data,
      });
    });
  };
};
export const fetchAllPokemonTypes = () => {
  return (dispatch) => {
    fetchAllPokemonTypeService().then((data) => {
      return dispatch({
        type: FETCH_ALL_POKEMON_TYPE,
        payload: data,
      });
    });
  };
};

