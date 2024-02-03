//Method 2 to handle context api

import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme: ()=>{}, //declaring functions
    lightTheme: ()=>{}
});

export const ThemeContextProvider = ThemeContext.Provider 

export default function useTheme(){
    return useContext(ThemeContext)
}