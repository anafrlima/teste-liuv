import types from "../../constants";

export const openDialog = (payload) => {
  return {
    type: types.OPEN_DIALOG,
    open: payload,
  };
};

export const closeDialog = () => {
  return {
    type: types.CLOSE_DIALOG,
    open: payload,
  };
};
