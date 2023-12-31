import {
  FETCH_POKEMON,
  FETCH_ALL_POKEMON,
  FETCH_ALL_POKEMON_TYPE,
  POST_POKEMON,
  DELETE_POKEMON,
  NEXT_PAGE,
  PREV_PAGE,
  TYPE_FILTER,
  ORIGIN_FILTER,
  SORT_ORDER_FILTER,

} from "../Actions/action-types";

const initialState = {
  allPokemonsToShow: [],
  allPokemonList: [],
  AllPokemonBackupList: [],
  allTypes: [],
  detailPokemon: [],
  currentPage: 0,
  totalPages: 0,
  filterSetUp: {
    origin: "both",
    type: "all",
    order: "A-Z",
    sortBy: "pokemon_id",
  },
};

const rootReducer = (state = initialState, { type, payload }) => {
  const ITEMS_PER_PAGE = 12;

  switch (type) {
    case FETCH_ALL_POKEMON:
      return {
        ...state,
        allPokemonList: payload.allPokemons,
        AllPokemonBackupList: payload.allPokemons,
        allPokemonsToShow: payload.allPokemons.slice(0, ITEMS_PER_PAGE),
        totalPages: Math.ceil(payload.allPokemons.length / 12),
      };
    case FETCH_ALL_POKEMON_TYPE:
      return { ...state, allTypes: payload };
    case FETCH_POKEMON:
      const isDuplicated = state.allPokemonList.some((e) => {
        return Number(e.pokemon_id) === Number(payload.pokemon_id);
      });
      if (!isDuplicated) {
        return {
          ...state,
          currentPage: 0,
          allPokemonList: [payload, ...state.allPokemonList],
          AllPokemonBackupList: [payload, ...state.allPokemonList],
          allPokemonsToShow: [
            payload,
            ...state.allPokemonList.slice(0, ITEMS_PER_PAGE),
          ],
        };
      }
      return { ...state };
    case NEXT_PAGE:
      const nextPage = state.currentPage + 1;
      if (nextPage >= state.totalPages) {
        const startIndex = 0;
        const endIndex = ITEMS_PER_PAGE;
        return {
          ...state,
          currentPage: 0,
          allPokemonsToShow: state.allPokemonList.slice(startIndex, endIndex),
        };
      } else {
        const startIndex = nextPage * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;

        return {
          ...state,
          currentPage: nextPage,
          allPokemonsToShow: state.allPokemonList.slice(startIndex, endIndex),
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
          allPokemonsToShow: state.allPokemonList.slice(startIndex, endIndex),
        };
      } else {
        const lastPage = state.totalPages - 1;
        const startIndex = lastPage * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return {
          ...state,
          currentPage: lastPage,
          allPokemonsToShow: state.allPokemonList.slice(startIndex, endIndex),
        };
      }
    case ORIGIN_FILTER:
      let originFilteredArr = [];
      if (payload === "both") originFilteredArr = state.AllPokemonBackupList;
      if (payload === "local")
        originFilteredArr = state.AllPokemonBackupList.filter(
          (e) => e.pokemon_isLocal === true
        );
      if (payload === "api")
        originFilteredArr = state.AllPokemonBackupList.filter(
          (e) => !isNaN(Number(e.pokemon_id))
        );
      return {
        ...state,
        currentPage: 0,
        allPokemonList: originFilteredArr,
        filterSetUp: { ...state.filterSetUp, origin: payload },
        totalPages: Math.ceil(originFilteredArr.length / 12),
        allPokemonsToShow: originFilteredArr.slice(0, ITEMS_PER_PAGE),
      };
    case TYPE_FILTER:
      let typeFilteredArr = [];
      let typeFilteredArrBackup = state.AllPokemonBackupList;

      if (payload === "all") {
        typeFilteredArr = typeFilteredArrBackup;
      } else {
        typeFilteredArr = state.AllPokemonBackupList.filter((e) => {
          return e.PokemonTypes.some((type) => type.nombre_type === payload);
        });
      }

      return {
        ...state,
        currentPage: 0,
        allPokemonList: typeFilteredArr,
        filterSetUp: { ...state.filterSetUp, type: payload },
        totalPages: Math.ceil(typeFilteredArr.length / 12),
        allPokemonsToShow: typeFilteredArr.slice(0, ITEMS_PER_PAGE),
      };

    case SORT_ORDER_FILTER:
      let orderState = [...state.allPokemonList];

      if (payload.atribute === 'pokemon_name') {
        orderState.sort((a, b) => {
          const nameA = a.pokemon_name.toLowerCase();
          const nameB = b.pokemon_name.toLowerCase();
          return payload.order === 'A-Z' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
        });
      } else {
        orderState.sort((a, b) => {
          const valueA = payload.atribute === 'pokemon_id' ? a[payload.atribute] : a.PokemonStatPoint[payload.atribute];
          const valueB = payload.atribute === 'pokemon_id' ? b[payload.atribute] : b.PokemonStatPoint[payload.atribute];
          return payload.order === 'A-Z' ? valueA - valueB : valueB - valueA;
        });
      }
      
      return {
        ...state,
        currentPage: 0,
        allPokemonList: orderState,
        totalPages: Math.ceil(orderState.length / ITEMS_PER_PAGE),
        filterSetUp: {
          ...state.filterSetUp,
          order: payload.order,
          atribute: payload.atribute,
        },
        allPokemonsToShow: orderState.slice(0, ITEMS_PER_PAGE),
      };

    case POST_POKEMON:
      return {
        ...state,
        currentPage: 0,
        allPokemonList: [payload, ...state.allPokemonList],
        AllPokemonBackupList: [payload, ...state.allPokemonList],
        allPokemonsToShow: [
          payload,
          ...state.allPokemonList.slice(0, ITEMS_PER_PAGE),
        ],
      };

    case DELETE_POKEMON:
      const newPokemonList = state.allPokemonList.filter((e) => {
        return e.pokemon_id !== payload;
      });
      return {
        ...state,
        allPokemonList: newPokemonList,
        AllPokemonBackupList: newPokemonList,
        totalPages: Math.ceil(newPokemonList.length / 12),
        allPokemonsToShow: newPokemonList.slice(0, ITEMS_PER_PAGE),
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
