import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { issueReducer } from './issueReducer';
import { useDispatch } from 'react-redux';

const reducer = combineReducers({ issueReducer: issueReducer.reducer });

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
