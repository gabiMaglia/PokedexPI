

const initialState = {
    myFavorites: [],
    allPokemon: [],
  };


const rootReducer = (state = initialState, { type, payload }) => {
        switch (type) {
            case "ADD_FAVORITE":
                return { ...state, myFavorites: payload, allCharacters: payload };
              case "REMOVE_FAVORITE":
                return { ...state, myFavorites: payload, allCharacters: payload };
              case "CLEAR_FAVORITE":
                return { ...state, myFavorites: payload, allCharacters: payload };
              case "FILTER":
                return {
                  ...state,
                  myFavorites:
                    payload === "All"
                      ? state.allCharacters
                      : state.allCharacters.filter((e) => e.gender === payload),
                };
              case "ORDER":
                return {
                  ...state,
                  myFavorites: state.allCharacters.sort((a, b) => {
                    return payload === "A" ? a.id - b.id : b.id - a.id;
                  }), 
                };
            default:
               return {... state}
        }
}

export default rootReducer;