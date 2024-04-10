"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import insuranceAgencySlice from "@/state-managment/slice/insuranceAgencySlice"; // Adjust the import path as necessary
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import { baseApi } from "@/api-managment/api/baseApi";

const rootReducer = combineReducers({
  insuranceAgency: insuranceAgencySlice,
  [baseApi.reducerPath]: baseApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
setupListeners(store.dispatch);

export default store;
