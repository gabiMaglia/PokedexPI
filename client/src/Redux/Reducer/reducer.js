import {
  FETCH_POKEMON,
  FETCH_ALL_POKEMON,
  FETCH_ALL_POKEMON_TYPE,
  NEXT_PAGE,
  PREV_PAGE,
} from "../Actions/action-types";

const initialState = {
  myFavorites: [],
  allPokemons: [],
  allPokemonsBackup: [],
  allTypes: [],
  detailPokemon: [],
  currentPage: 0,
};

const rootReducer = (state = initialState, { type, payload }) => {
  const ITEMS_PER_PAGE = 12;

  let lasttIndex = state.allPokemonsBackup.length;
  const totalPages = Math.ceil(lasttIndex / ITEMS_PER_PAGE) ;
  console.log(lasttIndex);
  console.log(totalPages);

  switch (type) {
    case FETCH_ALL_POKEMON:
      return {
        ...state,
        allPokemonsBackup: payload.allPokemons,
        allPokemons: payload.allPokemons.slice(0, ITEMS_PER_PAGE),
      };
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
    case NEXT_PAGE:
      const nextPage = state.currentPage + 1;
      if (nextPage >= 13) {
        const startIndex = 0;
        const endIndex = ITEMS_PER_PAGE;
        return {
          ...state,
          currentPage: 0,
          allPokemons: state.allPokemonsBackup.slice(startIndex, endIndex),
        };
      } else {
        const startIndex = nextPage * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;

        return {
          ...state,
          currentPage: nextPage,
          allPokemons: state.allPokemonsBackup.slice(startIndex, endIndex),
        };
      }

    case PREV_PAGE:
      const prevPage = state.currentPage - 1;
      if (prevPage >= 0) {
        const startIndex = prevPage * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return {
          ...state,
          currentPage: state.currentPage - 1,
          allPokemons: state.allPokemonsBackup.slice(startIndex, endIndex),
        };
      } else {
        const lastPage = totalPages - 1;
        const startIndex = lastPage * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return {
          ...state,
          currentPage: lastPage,
          allPokemons: state.allPokemonsBackup.slice(startIndex, endIndex),
        };
      }

    case "POST_NEW_POKEMON":
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
