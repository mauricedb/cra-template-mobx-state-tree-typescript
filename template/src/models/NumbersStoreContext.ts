import { createContext } from "react";
import { NumbersType } from ".";

export const NumbersStoreContext = createContext<NumbersType | null>(null);

export const NumbersStoreProvider = NumbersStoreContext.Provider;
