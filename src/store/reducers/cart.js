import types from "../../constants";

const initialState = {
  qtdItens: 0,
  itens: [],
  total: 0,
};

const cart = (state = initialState, action) => {
  const { itens, qtdItens, total, type } = action;

  switch (type) {
    case types.ADD_ITEM_CART:
      return {
        ...state,
        itens,
        qtdItens,
        total,
      };
    case types.REMOVE_ITEM_CART:
      return {
        ...state,
        itens,
        qtdItens,
        total,
      };
    default:
      return state;
  }
};

export default cart;
