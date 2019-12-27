export const initialState = {
  filterExist: false,
  filters: {
    breed: [],
    ages: [],
    size: [],
    gender: [],
    goodWiths: [],
    coatLength: []
  }
};

const appReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "GET_FILTERS":
      const res = localStorage.getItem("myValueInLocalStorage");
      return {
        ...state,
        filters: JSON.parse(res)
      };
    case "SAVE_FILTERS":
      localStorage.setItem("myValueInLocalStorage", JSON.stringify(state.filters));
    case "UPDATE_FILTER":
      return {
        ...state,
        filters: { ...state.filters, [actions.filter]: actions.payload }
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          breed: [],
          ages: [],
          size: [],
          gender: [],
          goodWiths: [],
          coatLength: []
        }
      };
    case "UPDATE_FILTER_EXIST":
      return {
        ...state,
        filterExist: actions.payload
      };
    default:
      return state;
  }
};

export default appReducer;
