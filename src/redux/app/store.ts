import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { authReducer } from 'redux/features';
import { history, loadState } from 'utils';
import rootSaga from './rootSaga';


const rootReducer = combineReducers({
  auth: authReducer,
  router: connectRouter(history)  
})


// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history)),
  preloadedState: loadState(),
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

