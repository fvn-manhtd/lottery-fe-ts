import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { cartApi, lotteryApi, newsApi, staticPageApi } from 'api';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import {
  FLUSH, PAUSE,
  PERSIST, persistReducer, PURGE,
  REGISTER, REHYDRATE
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { authReducer, currentUserReducer, storeObjectReducer } from 'redux/features';
import { history } from 'utils';
import rootSaga from './rootSaga';



const persistConfig = {
  key: 'gacha',
  blacklist: ['currentUser', 'newsApi', 'lotteryApi', 'staticPageApi', 'cartApi', 'favoriteApi'],
  storage,
}

const combinedReducer = combineReducers({
  auth: authReducer,
  currentUser: currentUserReducer,
  [newsApi.reducerPath]: newsApi.reducer,
  [lotteryApi.reducerPath]: lotteryApi.reducer,
  [staticPageApi.reducerPath]: staticPageApi.reducer,
  [cartApi.reducerPath]: cartApi.reducer,
  storeObject: storeObjectReducer,
  router: connectRouter(history)  
});

const rootReducer = (state, action) => {
  if (action.type === 'auth/reset') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
  }).concat(cartApi.middleware, newsApi.middleware,lotteryApi.middleware,staticPageApi.middleware,sagaMiddleware, routerMiddleware(history)),
  devTools: process.env.NODE_ENV !== 'production'
});

setupListeners(store.dispatch);

sagaMiddleware.run(rootSaga)


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


