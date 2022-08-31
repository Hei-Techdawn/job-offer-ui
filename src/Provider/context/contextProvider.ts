import { createContext } from "react";
import { TPrincipalContext } from "./types";

export const initialContext: TPrincipalContext = {
    snackbar: (e,b)=> void {},
    modal: (e)=> {},
}

export const PrincipalContext = createContext(initialContext);