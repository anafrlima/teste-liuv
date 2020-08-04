import types from "../../constants";

const getMenu = ({ categories }) => {
  return {
    type: types.GET_MENU,
    categories,
  };
};

export const menuActions = {
  getMenu,
};
