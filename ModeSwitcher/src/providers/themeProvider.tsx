import React, { createContext, useState, useContext } from 'react';
import { useColorScheme } from 'react-native-appearance';

const lightColors = {
    background: '#FFFFFF',
    text: '#121212'
}
const darkColors = {
    background: '#121212',
    text: '#FFFFFF'
}

export const ThemeContext = createContext<any>({
    isDark: false,
    colors: lightColors,
    setScheme: () => { },
});

export const ThemeProvider: React.FC<any> = (props) => {
    const colorScheme = useColorScheme();

    const [isDark, setIsDark] = useState(colorScheme === 'dark');

    React.useEffect(() => {
        setIsDark(colorScheme === 'dark');
    }, [colorScheme]);

    const defaultTheme = {
        isDark,
        colors: isDark ? darkColors : lightColors,
    };

    const switchTheme = () => {
        setIsDark((isDark) => !isDark)
    }

    return (
        <ThemeContext.Provider value={defaultTheme}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext)