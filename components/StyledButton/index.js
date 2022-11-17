import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const StyledButton = (props) => {
//   const type = props.type;
//   const content = props.content;   // without detructiring
//   const onPress = props.onPress;
  const {type, content, onPress} = props;  // with destructiring
  const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFF6A';
  const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';
  return (
    <View style={styles.container}>
      <Pressable style={[styles.button, {backgroundColor: backgroundColor}]} onPress={() => onPress()}>
        <Text style={[styles.text, {color: textColor}]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
