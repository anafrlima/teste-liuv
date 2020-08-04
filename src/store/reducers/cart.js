import types from "../../constants";

const initialState = {
  qtdItens: 6,
  itens: [
    {
      id: 1,
      name: "Fanta",
      unit_price: 5.5,
      qtd: 3,
    },
    {
      id: 2,
      name: "X-burguer",
      unit_price: 13.0,
      qtd: 3,
    },
  ],
  total: 55.5,
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
