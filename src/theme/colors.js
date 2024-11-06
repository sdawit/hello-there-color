export const DEFAULT = "#999";
export const DEFAULT_LIGHTER = "#F5F7F9";
export const PRIMARY = "rgba(32, 47, 83, 1)";
export const SECONDARY = "#EEA123";
export const SUCCESS = "#2ECD7D";
export const WARNING = "#ff9800";
export const DANGER = "#f44336";
export const INFO = "#18A2DD";
export const DARK = "rgb(28,28,30)";
export const LIGHT = "#fff";

const colors = {
    light: {
        input: "transparent",
        background: "#EFF2F5",
        backgroundLighter: "#FAFAFA",
        foreground: "#fff",
        default: DEFAULT,
        defaultLighter: DEFAULT_LIGHTER,
        primary: PRIMARY,
        accent: SECONDARY,
        success: SUCCESS,
        warning: WARNING,
        danger: DANGER,
        info: INFO,
        dark: DARK,
        light: LIGHT,
        placeholder: "#707070",
        border: "#cccccc",
        text: PRIMARY,
    },
    dark: {
        input: "transparent",
        background: "#000000",
        backgroundLighter: "#FAFAFA",
        foreground: "#181818",
        default: DEFAULT,
        defaultLighter: DEFAULT_LIGHTER,
        primary: PRIMARY,
        accent: SECONDARY,
        success: SUCCESS,
        warning: WARNING,
        danger: DANGER,
        info: INFO,
        dark: DARK,
        light: LIGHT,
        border: "#555",
        placeholder: "#555",
    },
};

export default colors;
