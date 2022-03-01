import React, { useContext, useState } from "react"
import { THEME_LIGHT, THEME_DARK, THEME_DEFAULT } from "../constants/themeConstants";
import { changeCssVaribles } from "../services/changeCssVaribles";

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children, ...props}) => {
    const [theme, setTheme] = useState(null);

    const change = name => {
        setTheme(name);
        changeCssVaribles(name);
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                change
            }}
            {...props}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext)