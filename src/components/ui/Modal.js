import React from "react";
import Modal from "react-native-modal";
import {StyleSheet} from "react-native";

const BottomModal = (props) => {

  const {style} = props;

  return (
      <Modal
          {...props}
          style={[styles.modalStyles, style]}
      />
  );
};

const styles = StyleSheet.create({
  modalStyles: {
    margin: 0,
    justifyContent: 'flex-end',
  }
})
export default BottomModal;
