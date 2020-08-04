import types from "../../constants";

import getCategories from "../../services";

const getMenu = async () => {
  const categories = await getCategories();

  return {
    type: types.GET_MENU,
    categories,
  };
};

export const menuActions = {
  getMenu,
};
