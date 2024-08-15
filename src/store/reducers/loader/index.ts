import { TOGGLE_LOADER_MODAL } from "../../types";

const initialState = {
  open: false,
};

const loaderModalReducer = (
  state = initialState,
  action: { type: string; payload: boolean }
) => {
  switch (action.type) {
    case TOGGLE_LOADER_MODAL:
      return {
        ...state,
        open: action.payload,
      };
    default:
      return state;
  }
};

export default loaderModalReducer;
