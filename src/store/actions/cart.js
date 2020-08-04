import types from "../../constants";

const addItemCart = (payload) => {
  const { qtdItens, itens, total, itemAdded, qtdToAdded } = payload;

  const itensWithitemAdded = itens.map((item) => {
    if (item.id === itemAdded.id) {
      return {
        ...item,
        qtd: item.qtd + qtdToAdded,
      };
    }

    return item;
  });

  const priceItemTotal = itemAdded.unit_price * qtdToAdded;
  const newTotal = total + priceItemTotal;

  const newQtdItens = qtdItens + qtdToAdded;

  return {
    type: types.ADD_ITEM_CART,
    itens: itensWithitemAdded,
    qtdItens: newQtdItens,
    total: newTotal,
  };
};

const removeItemCart = (payload) => {
  const { qtdItens, itens, total, itemRemoved, qtdToRemoved } = payload;

  let itensWithoutRemovedItem = [];

  if (qtdToRemoved === itemRemoved.qtd) {
    itensWithoutRemovedItem = itens.filter((item) => {
      return item.id !== itemRemoved.id;
    });
  }

  if (qtdToRemoved < itemRemoved.qtd) {
    itensWithoutRemovedItem = itens.map((item) => {
      if (item.id === itemRemoved.id) {
        const newQtd = itemRemoved.qtd - 1;

        return {
          ...itemRemoved,
          qtd: newQtd,
        };
      }

      return item;
    });
  }

  const totalPriceItemRemoved = itemRemoved.unit_price * qtdToRemoved;
  const newTotal = total - totalPriceItemRemoved;

  const newQtdItens = qtdItens - itemRemoved.qtd;

  return {
    type: types.REMOVE_ITEM_CART,
    itens: itensWithoutRemovedItem,
    qtdItens: newQtdItens,
    total: newTotal,
  };
};

export const cartActions = {
  addItemCart,
  removeItemCart,
};
