import { FETCHPOKEMON } from "./action-types";
import {
    fetchPokemonService,
} from "../../services/pokemonServices";

export const searchPokemonByName = (name) => {
  return (dispatch) => {
    fetchPokemonService(name).then((data) => {
      return dispatch({
        type: FETCHPOKEMON,
        payload: data,
      });
    });
  };
};
export const searchPokemonById = (id) => {};
