import types from "../../constants";

const openDialog = async (payload) => {
  console.log("actions");
  return {
    type: types.OPEN_DIALOG,
    open: true,
  };
};

const closeDialog = async () => {
  return {
    type: types.CLOSE_DIALOG,
    open: false,
  };
};

export const dialogActions = {
  openDialog,
  closeDialog,
};
