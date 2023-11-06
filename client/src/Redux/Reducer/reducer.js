import { FETCHPOKEMON } from "../Actions/action-types";

const initialState = {
  myFavorites: [],
  allPokemon: [],
  allTypes: [],
  currentPage: 0,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHPOKEMON:
      // eslint-disable-next-line no-case-declarations
      const isDuplicated = state.allPokemon.some((e) => {
        return Number(e.pokemon_id) === Number(payload.pokemon_id);
      });
     
      if (!isDuplicated) {
        return { ...state, allPokemon: [...state.allPokemon, payload] };
      }
      return { ...state };
    case "ADD_FAVORITE":
      return { ...state, myFavorites: payload, allPokemon: payload };
    case "REMOVE_FAVORITE":
      return { ...state, myFavorites: payload, allPokemon: payload };
    case "CLEAR_FAVORITE":
      return { ...state, myFavorites: payload, allPokemon: payload };
    case "FILTER":
      return {
        ...state,
        myFavorites:
          payload === "All"
            ? state.allPokemon
            : state.allPokemon.filter((e) => e.gender === payload),
      };
    case "ORDER":
      return {
        ...state,
        myFavorites: state.allPokemon.sort((a, b) => {
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
