import types from "../../constants";

const initialState = {
  open: false,
};

const dialog = (state = initialState, action) => {
  const { open } = action;

  switch (action.type) {
    case types.OPEN_DIALOG:
      return {
        ...state,
        open,
      };
    case types.CLOSE_DIALOG:
      return {
        ...state,
        open,
      };
    default:
      return state;
  }
};

export default dialog;
