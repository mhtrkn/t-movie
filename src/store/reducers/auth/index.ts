import { LOGIN, LOGOUT } from "../../types";

const initialState = {
  user: false,
};

const AuthReducer = (
  state = initialState,
  action: { type: string; payload: boolean }
) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        open: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        open: action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;
