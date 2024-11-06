import React from "react";
import {StyleSheet} from "react-native";
import PropTypes from "prop-types";
import {
    Text as _Text,
    Headline,
    Paragraph,
    Caption,
    Subheading,
    Title,
    useTheme,
    HelperText,
} from "react-native-paper";

const Text = (props) => {
    const {colors} = useTheme();
    const {style, type} = props;

    // Theme color depending on color types from
    // constants/colors.js.; Defaults to 'text'
    let color = colors[type];
    // Override by a custom color
    if (props.color) {
        color = props.color;
    }

    let textStyle = {
        color: color,
        textAlign: props.align,
    };

    // Override by a custom font size
    if (props.size) {
        textStyle["fontSize"] = props.size;
    }

    switch (props.mode) {
        case "headline":
            return (
                <Headline
                    {...props}
                    style={[styles.headline, textStyle, style]}
                />
            );
        case "bolder":
            return (
                <Headline
                    {...props}
                    style={[styles.bolder, textStyle, style]}
                />
            );
        case "subheading":
            return (
                <Subheading
                    {...props}
                    style={[styles.subheading, textStyle, style]}
                />
            );
        case "paragraph":
            return <Paragraph {...props} style={[textStyle, style]}/>;
        case "caption":
            return <Caption {...props} style={[textStyle, style]}/>;
        case "label":
            return (
                <Title {...props} style={[styles.label, textStyle, , style]}/>
            );
        case "title":
            return <Title {...props} style={[textStyle, style]}/>;
        case "error":
            return (
                <HelperText
                    {...props}
                    style={[textStyle, styles.error, style]}
                />
            );
        case "text":
        default:
            return <_Text {...props} style={[styles.text, textStyle, style]}/>;
    }
};

Text.defaultProps = {
    mode: "text",
    type: "text",
    align: "left",
};

Text.propTypes = {
    mode: PropTypes.oneOf([
        "headline",
        "bolder",
        "subheading",
        "paragraph",
        "caption",
        "label",
        "title",
        "error",
        "text",
    ]).isRequired,
    type: PropTypes.oneOf([
        "primary",
        "secondary",
        "text",
        "disabled",
        "placeholder",
        "success",
        "warning",
        "danger",
        "info",
        "light",
        "dark",
    ]),
    size: PropTypes.number,
    align: PropTypes.oneOf(["left", "center", "right", "justify"]),

    style: PropTypes.object,
};

const styles = StyleSheet.create({
    headline: {
        fontSize: 32,
        paddingTop: 20,
        lineHeight: 50,
        fontFamily: "OpenSans-SemiBold",
    },
    bolder: {
        fontSize: 16,
        fontFamily: "OpenSans-Bold",
    },
    subheading: {
        fontFamily: "OpenSans-Regular",
        fontSize: 18,
    },
    text: {
        fontSize: 15,
        fontFamily: "OpenSans-SemiBold",
    },
    label: {
        fontFamily: "OpenSans-Regular",
        fontSize: 16,
        marginBottom: 0,
    },
    error: {
        fontSize: 13,
    },
});

export default Text;
