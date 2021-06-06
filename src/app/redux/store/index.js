import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from '../slices';

const middleware = getDefaultMiddleware({ immutableCheck: false, serializableCheck: false });

export const store = configureStore({ reducer: rootReducer, middleware });
