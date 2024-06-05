import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { useFonts } from "expo-font";
export default function ButtonPolicy({ text, style, onPress }) {
  const [fontsLoaded] = useFonts({
    "CreteRound-Regular": require("../assets/fonts/CreteRound-Regular.ttf"),
    "Figtree-VariableFont": require("../assets/fonts/Figtree-VariableFont_wght.ttf"),
  });
  if (!fontsLoaded) {
    return console.log("Fonts not loaded on ButtonComponent");
  }
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.button}>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 20,
            fontFamily: "CreteRound-Regular",
          }}
        >
          {text}
        </Text>
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
    borderRadius: 45,
    width: wp(40),
    height: hp(5),
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#671111",
    justifyContent: "center",
    marginBottom: hp(3),
  },
  buttonText: {},
});
