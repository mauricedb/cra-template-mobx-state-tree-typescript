import { createContext } from "react";
import { NumbersType } from "../models";

export const NumbersStoreContext = createContext<NumbersType | null>(null);
