import React from 'react';
import {Pressable, StyleSheet, View, Text} from 'react-native';
import {PaperProvider, useTheme} from "react-native-paper";
import {Ionicons} from "@expo/vector-icons";
import {SafeAreaView} from 'react-native-safe-area-context';

import useColorGenerator from "./src/hooks/useColorGenerator";
import useCachedResources from "./src/hooks/useCachedResources";
import NavBar from "./src/components/Header/NavBar";
import History from "./src/components/Header/History";
import Setting from "./src/components/Header/Setting";

export default function App() {

    const isLoadingComplete = useCachedResources();

    const icon = (props) => <Ionicons {...props} />;

    const {theme} = useTheme();

    const [showHistoryModal, setHistoryModal] = React.useState(false);
    const [showSettingsModal, setSettingsModal] = React.useState(false);

    const {
        color, generateColor, textColor, colorHistory, clearHistory, setBackgroundColor, removeColorFromHistory,
        setEnableHaptics, enableHaptics
    } = useColorGenerator();

    if (!isLoadingComplete) return null;

    return (
        <PaperProvider theme={theme} settings={{icon}}>

            <SafeAreaView style={{
                flex: 1,
                backgroundColor: color,
            }}>
                <Pressable
                    style={{
                        padding: 25,
                    }}
                    onPress={() => generateColor()}
                >
                    <NavBar
                        historyModalHandler={setHistoryModal}
                        settingsModalHandler={setSettingsModal}
                    />

                    <View style={styles.container}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: textColor,
                            }}
                        >Hello There 👋
                        </Text>
                    </View>
                </Pressable>

                <Setting
                    showSettingModal={showSettingsModal}
                    setSettingModal={setSettingsModal}
                    hapticHandler={setEnableHaptics}
                    isHapticEnabled={enableHaptics}
                />

                <History
                    showHistoryModal={showHistoryModal}
                    setHistoryModal={setHistoryModal}
                    textColor={textColor}
                    colorHistory={colorHistory}
                    clearHistory={clearHistory}
                    setBackgroundColor={setBackgroundColor}
                    removeColorFromHistory={removeColorFromHistory}
                />

            </SafeAreaView>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    }
});
