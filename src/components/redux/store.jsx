import { configureStore } from '@reduxjs/toolkit';
import selectReducer from './reducer';

export default configureStore({
  reducer: {
    select: selectReducer,
  },
});
