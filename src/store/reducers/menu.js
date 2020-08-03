import types from "../../constants";

const initialState = {
  categories: [],
};

const menu = (state = initialState, action) => {
  const { categories } = action;

  switch (action.type) {
    case types.GET_MENU:
      return {
        ...state,
        categories,
      };
    default:
      return state;
  }
};

export default menu;
