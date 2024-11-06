import React from "react";
import {Ionicons} from "@expo/vector-icons";
import {Pressable, View, StyleSheet} from "react-native";

const NavBar = ({
                    historyModalHandler,
                    settingsModalHandler
                }) => {
    return (
        <View style={styles.navbar}>
            <Pressable
                onPress={() => settingsModalHandler(true)}
            >
                <Ionicons name="cog" size={40} color="black"/>
            </Pressable>

            <Pressable
                onPress={() => historyModalHandler(true)}
            >
                <Ionicons name="time" size={40} color="black"/>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
export default NavBar;

