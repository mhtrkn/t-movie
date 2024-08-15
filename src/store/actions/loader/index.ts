import { TOGGLE_LOADER_MODAL } from "../../types";

export const setLoaderModal = (open: boolean) => ({
  type: TOGGLE_LOADER_MODAL,
  payload: open,
});
