import React from "react";
import {Pressable, Text, View, StyleSheet} from "react-native";

import Modal from "../ui/Modal";
import {Ionicons} from "@expo/vector-icons";
import Switch from "../ui/Switch";

const Setting = ({showSettingModal, setSettingModal, hapticHandler, isHapticEnabled}) => {

    return (<Modal
        isVisible={showSettingModal}
        onBackdropPress={() => setSettingModal(false)}
        onBackButtonPress={() => setSettingModal(false)}
    >
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Setting</Text>
                <Pressable
                    onPress={() => setSettingModal(false)}
                >
                    <Ionicons name="close" size={24} color="black"/>
                </Pressable>
            </View>

            <View
                style={styles.switchContainer}
            >
                <View style={styles.switchList}>
                    <Text
                        style={styles.listItemText}
                    >Vibrate On Change</Text>
                    <Switch
                        value={isHapticEnabled}
                        onValueChange={hapticHandler}
                    />
                </View>
                <View style={styles.switchList}>
                    <Text
                        style={styles.listItemText}
                    >Tap to Change</Text>
                    <Switch
                        value={true}
                        disabled
                    />
                </View>
            </View>

        </View>
    </Modal>)
}

const styles = StyleSheet.create({
    container: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        backgroundColor: "#ffffff",
        transform: [{translateY: 0}],
        height: '40%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    switchContainer: {
        marginTop: 20,
    },
    switchList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    listItemText: {
        fontSize: 18,
        fontWeight: 'semibold',
    }
});

export default Setting;