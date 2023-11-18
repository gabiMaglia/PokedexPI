import {
  FETCH_POKEMON,
  FETCH_ALL_POKEMON,
  FETCH_ALL_POKEMON_TYPE,
  PREV_PAGE,
  NEXT_PAGE,
  TYPE_FILTER,
  ORIGIN_FILTER,
  SORT_ORDER_FILTER,
  POST_POKEMON,
} from "./action-types";
import {
  fetchPokemonService,
  fetchAllPokemonService,
  fetchAllPokemonTypeService,
  fetchAllPokemonbySeasonService,
  postPokemonService,
  deletePokemonByIdService
} from "../../services/pokemonServices";

export const fetchPokemon = (name) => {
  return (dispatch) => {
    fetchPokemonService(name).then((data) => {

      if (data.error) return alert(data.error);
      
      return dispatch({
        type: FETCH_POKEMON,
        payload: data.response,
      });
    });
  };
};
export const postNewPokemon = (pokemonData) => {

  return (dispatch) => {
    postPokemonService(pokemonData).then((data) => {
      if (data.error) return alert(data.error);

      return dispatch({
        type: POST_POKEMON,
        payload: data.response,
      });
    });
  };
};
export const fetchAllPokemon = () => {
  return (dispatch) => {
    fetchAllPokemonService().then(({ data }) => {
      if (data.error) return alert(data.error);

      return dispatch({
        type: FETCH_ALL_POKEMON,
        payload: data.response,
      });
    });
  };
};
export const fetchAllPokemonbySeason = (limit, offset) => {
  return (dispatch) => {
    fetchAllPokemonbySeasonService(limit, offset).then(( {data}) => {
      if (data.error) return alert(data.error);
    
      return dispatch({
        type: FETCH_ALL_POKEMON,
        payload: data.response,
      });
    });
  };
};
export const fetchAllPokemonTypes = () => {
  return (dispatch) => {
    fetchAllPokemonTypeService().then((data) => {
      if (data.error) return alert(data.error);

      return dispatch({
        type: FETCH_ALL_POKEMON_TYPE,
        payload: data.response,
      });
    });
  };
};

export const deletePokemonById = (id) => {
  return (dispatch) => {
    deletePokemonByIdService(id).then((data) => {
      if (data.error) return alert(data.error);
      return dispatch({
        type: DELETE_POKEMON,
        payload:id
      })
    })
  }
}

// PAGINADO
export const prevPage = () => {
  return (dispatch) => {
    return dispatch({
      type: PREV_PAGE,
    });
  };
};
export const nextPage = () => {
  return (dispatch) => {
    return dispatch({
      type: NEXT_PAGE,
    });
  };
};

// FILTRADO

export const typeFilter = (data) => {
  return (dispatch) => {
    return dispatch({
      type: TYPE_FILTER,
      payload: data,
    });
  };
};
export const originFilter = (data) => {
  return (dispatch) => {
    return dispatch({
      type: ORIGIN_FILTER,
      payload: data,
    });
  };
};

export const sortAndOrderFilter = (data) => {
  return (dispatch) => {
    return dispatch({
      type: SORT_ORDER_FILTER,
      payload: data,
    });
  };
};
