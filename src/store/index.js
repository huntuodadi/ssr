import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {homeReducer} from '../containers/Home/store';
import sagas from './saga';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  home: homeReducer,
});

const getStore = () => {
  const store = createStore(reducer, applyMiddleware(thunk, sagaMiddleware));
  sagaMiddleware.run(sagas);
  return store;
}

export default getStore;