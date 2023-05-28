import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };

    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter((hit) => hit.objectID !== action.payload),
      };

    case HANDLE_SEARCH:
      return { ...state, query: action.payload, page: 0 };

    case HANDLE_PAGE:
      if (action.payload === "inc") {
        let next = state.page + 1;
        if (next > state.nbPages - 1) {
          next = 0;
        }
        return { ...state, page: next };
      }
      if (action.payload === "dec") {
        let prev = state.page - 1;
        if (prev < 0) {
          prev = state.nbPages - 1;
        }
        return { ...state, page: prev };
      }

    default:
      throw new Error("Error occured while fetching data");
  }
};
export default reducer;
