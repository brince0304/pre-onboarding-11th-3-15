import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { issueReducer } from './issueReducer';

const reducer = combineReducers({issueReducer : issueReducer.reducer});

export default configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
