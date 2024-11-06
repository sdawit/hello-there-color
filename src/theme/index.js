import React from "react";
import {
    DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";
import {
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";

// custom fonts
import Fonts from "./fonts";
// custom colors
import Colors from "./colors";

/**
 * react navigation and react native paper theme
 * integration
 *
 * For further information,
 *
 * @link https://callstack.github.io/react-native-paper/theming-with-react-navigation.html
 * @link https://reactnavigation.org/docs/themes/
 */

const roundness = 12;
const surface = 5;

const CustomTheme = {
    roundness,
    surface,
    fonts: Fonts,
};

const CustomDefaultTheme = {
    ...CustomTheme,
    colors: Colors["light"],
};

const CustomDarkTheme = {
    ...CustomTheme,
    colors: Colors["dark"],
};

export const CombinedDefaultTheme = {
    ...PaperDefaultTheme,
    ...NavigationDefaultTheme,
    ...CustomDefaultTheme,
    colors: {
        ...PaperDefaultTheme.colors,
        ...NavigationDefaultTheme.colors,
        ...CustomDefaultTheme.colors,
    },
};

export const CombinedDarkTheme = {
    ...PaperDarkTheme,
    ...NavigationDarkTheme,
    ...CustomDarkTheme,
    colors: {
        ...PaperDarkTheme.colors,
        ...NavigationDarkTheme.colors,
        ...CustomDarkTheme.colors,
    },
};

export const ThemeContext = React.createContext({
    toggleTheme: () => {},
    isThemeDark: false,
});
