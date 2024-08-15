import { createStore, combineReducers } from 'redux';
import loaderModalReducer from './reducers/loader';
import ModalReducer from './reducers/modal';

const rootReducer = combineReducers({
  loader: loaderModalReducer,
  modal: ModalReducer
});

const store = createStore(rootReducer);

export default store;
