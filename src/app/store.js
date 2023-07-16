import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import appointmentReducer from '../features/appointments/appointmentSlice';
import authReducer from '../features/auth/authSlice';
import filterReducer from '../features/filterSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    appointment: appointmentReducer,
    auth: authReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
