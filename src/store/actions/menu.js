import types from "../../constants";

const getMenu = async () => {
  return {
    type: types.GET_MENU,
  };
};

export const menuActions = {
  getMenu,
};
