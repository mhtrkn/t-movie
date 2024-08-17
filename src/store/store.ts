import { createStore, combineReducers } from "redux";
import loaderModalReducer from "./reducers/loader";
import ModalReducer from "./reducers/modal";
import AuthReducer from "./reducers/auth";

const rootReducer = combineReducers({
  auth: AuthReducer,
  loader: loaderModalReducer,
  modal: ModalReducer
});

const store = createStore(rootReducer);

export default store;
