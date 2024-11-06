import {configureFonts} from "react-native-paper";

const fonts = {
    regular: {
        fontFamily: "OpenSans-Regular",
        fontWeight: "normal",
    },
    medium: {
        fontFamily: "OpenSans-Regular",
        fontWeight: "600",
    },
    light: {
        fontFamily: "OpenSans-Light",
        fontWeight: "300",
    },
    thin: {
        fontFamily: "OpenSans-Light",
        fontWeight: "100",
    },
};

const fontConfig = {
    ios: fonts,
    android: fonts,
};

export default configureFonts(fontConfig);
