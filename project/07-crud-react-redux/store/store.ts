import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users/slice.ts';

const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem('__redux__state__', JSON.stringify(store.getState()));
};

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [persistanceLocalStorageMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
