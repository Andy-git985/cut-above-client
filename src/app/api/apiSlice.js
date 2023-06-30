import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:8080'
      : 'https://cutaboveshop-api.fly.dev/',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Appointment', 'User'],
  endpoints: (builder) => ({}),
});
