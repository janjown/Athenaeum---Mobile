import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";

export default function TextInputComponent({ ...rest }) {
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.loaderStyle}
        source={require("./assets/animations/student.json")}
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loaderStyle: {
    width: 200,
    height: 200,
  },
  loaderContainer: {
    borderRadius: 20,
    padding: 20,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
