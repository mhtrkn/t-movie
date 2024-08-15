import { MovieType } from "@/utils/type";
import { POSTER_MODAL, ERROR_MODAL, INFO_MODAL, CLOSE_POSTER_MODAL } from "../../types";

const initialState = {
  open: false,
  data: null,
  type: "poster",
};

const ModalReducer = (
  state = initialState,
  action: { type: string; payload: {
    data: MovieType;
    open: boolean;
    type: string;
  } }
) => {
  switch (action?.type) {
    case POSTER_MODAL:
      return {
        ...state,
        data: action?.payload?.data,
        open: action?.payload?.open,
        type: action?.payload?.type,
      };
    case CLOSE_POSTER_MODAL:
      return {
        ...initialState
      };  
    default:
      return state;
  }
};

export default ModalReducer;
