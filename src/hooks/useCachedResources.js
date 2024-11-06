import { Ionicons } from "@expo/vector-icons";
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import {useEffect} from "react";

export default function useCachedResources() {
    const [isLoaded] = useFonts({
        ...Ionicons.font,
        "OpenSans-Regular": require("../../assets/fonts/OpenSans-Regular.ttf"),
        "OpenSans-Light": require("../../assets/fonts/OpenSans-Light.ttf"),
        "OpenSans-SemiBold": require("../../assets/fonts/OpenSans-SemiBold.ttf"),
        "OpenSans-Bold": require("../../assets/fonts/OpenSans-Bold.ttf"),
    });

    useEffect(() => {
        if(isLoaded){
            SplashScreen.hideAsync();
            return;
        }
        SplashScreen.preventAutoHideAsync();
    }, [isLoaded])


    return isLoaded;
}
