import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import {
  FLUSH, PAUSE,
  PERSIST, persistReducer, PURGE,
  REGISTER, REHYDRATE
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { authReducer, currentUserReducer } from 'redux/features';
import { history } from 'utils';
import rootSaga from './rootSaga';



const persistConfig = {
  key: 'gacha',
  storage,
}

const combinedReducer = combineReducers({
  auth: authReducer,
  currentUser: currentUserReducer,
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
  }).concat(sagaMiddleware, routerMiddleware(history)),
  devTools: Boolean(process.env.REACT_APP_DEV_TOOLS)
});

sagaMiddleware.run(rootSaga)


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


