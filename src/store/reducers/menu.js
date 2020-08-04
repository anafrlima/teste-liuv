import types from "../../constants";

const initialState = {
  categories: [],
};

const menu = (state = initialState, action) => {
  const { categories, type } = action;

  switch (type) {
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
