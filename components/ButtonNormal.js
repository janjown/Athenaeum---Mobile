import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function ButtonNormal({
  text,
  onPress,
  borderColor,
  style,
  backgroundColor,
  navigation,
  borderWidth,
}) {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, style, borderColor, borderWidth]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={[styles.button, backgroundColor && { backgroundColor }]}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 25,
    width: wp(65),
    height: hp(5),
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
