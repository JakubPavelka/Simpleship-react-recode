import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

import languageReducer from "./features/languageSlice";
import hamburgerReducer from "./features/hamburgerSlice";

export const store = configureStore({
  reducer: { language: languageReducer, hamburger: hamburgerReducer },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
