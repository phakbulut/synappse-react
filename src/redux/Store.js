// store.js
import { createStore } from 'redux';
import mainReducer from './reducers/MainReducers';

const store = createStore(mainReducer);

export default store;