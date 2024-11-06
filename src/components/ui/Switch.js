import React from 'react';
import { StyleSheet } from 'react-native';
import { Switch as PaperSwitch, useTheme } from 'react-native-paper';

const Switch = (props) => {
    const { colors } = useTheme();
    const color = props.color ? props.color : colors[props.type];

    return (
        <PaperSwitch
            {...props}
            style={[styles.switch, props.style]}
            color={color}
        />
    );
};

Switch.defaultProps = {
    type: 'default',
};

const styles = StyleSheet.create({
    switch: {},
});

export default Switch;
