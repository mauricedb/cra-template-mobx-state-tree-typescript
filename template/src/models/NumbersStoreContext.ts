import { createContext } from "react";
import { NumbersType } from "./NumbersStore";

export const NumbersStoreContext = createContext<NumbersType | null>(null);
