import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';
import {logger} from 'redux-logger';
import rootReducer from '../reducer/rootReducer'
import { persistStore, persistCombineReducers, autoRehydrate } from 'redux-persist'
import storage from 'redux-persist/es/storage' // defaults to localStorage for web and AsyncStorage for react-native
import newsSaga from '../screens/news/saga';

const config = {
  key: 'root',
  storage
}

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware,
  logger
];

const persistedReducer = persistCombineReducers(config, rootReducer)
const enhancers = [applyMiddleware(...middleware)];

const persistConfig = { enhancers };


const store = createStore(persistedReducer, undefined, compose(...enhancers));
sagaMiddleware.run(newsSaga)

const persistor = persistStore(store, persistConfig, () => {
    // console.log(store.getState());
});

const configureStore = () => {
    return { persistor, store };
}
export default configureStore;