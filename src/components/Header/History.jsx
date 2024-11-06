import React from "react";
import {Pressable, ScrollView, Text, View, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";

import Modal from "../ui/Modal";

const History = ({showHistoryModal, setHistoryModal, textColor, colorHistory, clearHistory, setBackgroundColor, removeColorFromHistory}) => {

    return (<Modal
        isVisible={showHistoryModal}
        onBackdropPress={() => setHistoryModal(false)}
        onBackButtonPress={() => setHistoryModal(false)}
    >
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Recent Colors</Text>
                <Pressable
                    onPress={() => setHistoryModal(false)}
                >
                    <Ionicons name="close" size={24} color="black"/>
                </Pressable>
            </View>

            <View style={styles.clearHistory}>
                <Pressable
                    onPress={() => clearHistory()}
                >
                    <Text>Clear History</Text>
                </Pressable>
            </View>

            <ScrollView
                style={styles.scrollContainer}
            >
                {
                    colorHistory.length > 0 ?
                        colorHistory.map((color, index) => (
                            <Pressable
                                key={index}
                                onPress={() => setBackgroundColor(color)}
                            >
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: 10,
                                    backgroundColor: color,
                                    marginVertical: 5,
                                    borderRadius: 5,
                                }}>
                                    <Text style={{
                                        color: textColor,
                                    }}>{color}</Text>


                                    <Pressable
                                        onPress={() => removeColorFromHistory(color)}
                                    >
                                        <Ionicons name="trash" size={24} color="black"/>
                                    </Pressable>

                                </View>
                            </Pressable>
                        )) : <View
                            style={styles.noHistory}
                        >
                            <Text>No Color History</Text>
                        </View>
                }
            </ScrollView>
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
    clearHistory: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    scrollContainer: {
        height: '80%',
    },
    listContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    noHistory: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },

});

export default History;