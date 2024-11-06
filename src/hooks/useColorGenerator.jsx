import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Haptics from 'expo-haptics';

import {DEFAULT_COLOR} from "../constants";

const useColorGenerator = () => {
    const [color, setColor] = React.useState(DEFAULT_COLOR);
    const [textColor, setTextColor] = React.useState("#000000");
    const [colorHistory, setColorHistory] = React.useState([]);
    const [enableHaptics, setEnableHaptics] = React.useState(false);

    //the color difference is calculated using the euclidean distance between the two colors
    const setTextColorHandler = (color) => {
        const color1 = color.split("#").slice(1).map((c) => parseInt(c, 16));
        const color2 = textColor.split("#").slice(1).map((c) => parseInt(c, 16));
        const distance = Math.sqrt(
            color1.reduce((acc, c, i) => acc + Math.pow(c - color2[i], 2), 0)
        );

        if (distance < 100) {
            setTextColor("#ffffff");
        } else {
            setTextColor("#000000");
        }
    }

    const generateColor = () => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setColor(randomColor);

        setTextColorHandler(randomColor);

        setColorHistory([randomColor, ...colorHistory]);
        storeColorHistory();

        if (enableHaptics) handleHaptics();
    }

    const handleHaptics = () => {
        Haptics.selectionAsync()
    }

    const clearHistory = () => {
        setColorHistory([]);
    }

    const storeColorHistory = async () => {
        try {
            await AsyncStorage.setItem("colorHistory", JSON.stringify(colorHistory));
        } catch (e) {
            console.log(e);
        }
    }

    const getColorHistory = async () => {
        try {
            const colorHistory = await AsyncStorage.getItem("colorHistory");
            if (colorHistory !== null) {
                setColorHistory(JSON.parse(colorHistory));
            }
        } catch (e) {
        }
    }

    const setBackgroundColor = (color) => {
        setColor(color);
        setTextColorHandler(color);
    }

    const removeColorFromHistory = (color) => {
        setColorHistory(colorHistory.filter((c) => c !== color));
        storeColorHistory();
    }

    React.useEffect(() => {
        getColorHistory();
    }, []);


    return {
        color,
        generateColor,
        textColor,
        colorHistory,
        clearHistory,
        setBackgroundColor,
        removeColorFromHistory,
        setEnableHaptics,
        enableHaptics
    };
}

export default useColorGenerator;