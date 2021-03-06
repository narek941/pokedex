const initialState = {
  pokemons: [],
  filteredPokemon: [],
  totalCount: 0,
  isLoading: false,
  singlePokemon: {},
};
export const SET_POKEMONS = "SET_POKEMONS";
export const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
export const SEARCH_POKEMONS = "SEARCH_POKEMONS";
export const IS_LOADING = "IS_LOADING";
export const SET_SINGLE_POKEMON = "SET_SINGLE_POKEMON";

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case SET_TOTAL_COUNT:
      return { ...state, totalCount: action.payload };
    case IS_LOADING:
      return { ...state, isLoading: action.payload };
    case SEARCH_POKEMONS:
      return { ...state, filteredPokemon: action.payload };
    case SET_SINGLE_POKEMON:
      return { ...state, singlePokemon: action.payload };
    default:
      return state;
  }
};
