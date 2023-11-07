import {
  FETCH_POKEMON,
  FETCH_ALL_POKEMON,
  FETCH_ALL_POKEMON_TYPE,
} from "../Actions/action-types";

const initialState = {
  myFavorites: [],
  allPokemons: [],
  allTypes: [],
  currentPage: 0,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_POKEMON:
      return { ...state, allPokemons: payload.allPokemons };
    case FETCH_ALL_POKEMON_TYPE:
      return { ...state, allTypes: payload };
    case FETCH_POKEMON:
      const isDuplicated = state.allPokemons.some((e) => {
        return Number(e.pokemon_id) === Number(payload.pokemon_id);
      });
      if (!isDuplicated) {
        return { ...state, allPokemons: [...state.allPokemons, payload] };
      }
      return { ...state };
    case "ADD_FAVORITE":
      return { ...state, myFavorites: payload, allPokemons: payload };
    case "REMOVE_FAVORITE":
      return { ...state, myFavorites: payload, allPokemons: payload };
    case "CLEAR_FAVORITE":
      return { ...state, myFavorites: payload, allPokemons: payload };
    case "FILTER":
      return {
        ...state,
        myFavorites:
          payload === "All"
            ? state.allPokemons
            : state.allPokemons.filter((e) => e.gender === payload),
      };
    case "ORDER":
      return {
        ...state,
        myFavorites: state.allPokemons.sort((a, b) => {
          return payload === "A" ? a.id - b.id : b.id - a.id;
        }),
      };
    case "PAGINATE":
      //Definir el first index

      //Casos de corte

      //Guardar el estado
      return;
    default:
      return { ...state };
  }
};

export default rootReducer;
