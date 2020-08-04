import types from "../../constants";

const addItemCart = (payload) => {
  const { qtdItens, itens, total } = payload;

  return {
    type: types.ADD_ITEM_CART,
    itens,
    qtdItens,
    total,
  };
};

const removeItemCart = (payload) => {
  const { qtdItens, itens, total } = payload;

  return {
    type: types.REMOVE_ITEM_CART,
    itens,
    qtdItens,
    total,
  };
};

export default cartActions = {
  addItemCart,
  removeItemCart,
};
