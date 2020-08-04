import types from "../../constants";

const openDialog = (payload) => {
  return {
    type: types.OPEN_DIALOG,
    open: payload,
  };
};

const closeDialog = () => {
  return {
    type: types.CLOSE_DIALOG,
    open: payload,
  };
};

export const dialogActions = {
  openDialog,
  closeDialog,
};
