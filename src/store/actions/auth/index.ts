import { LOGIN, LOGOUT } from "../../types";

export const setLoginSlices = () => ({
  type: LOGIN,
  payload: true
});

export const setLogoutSlices = () => ({
  type: LOGOUT,
  payload: false
});
