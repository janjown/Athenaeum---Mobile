import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontAwesome5 } from "@expo/vector-icons";

export default function TextInputComponent({ secureTextEntry, ...rest }) {
  const [passwordVisibility, setPasswordVisibility] = useState(secureTextEntry);

  const togglePasswordVisibility = () => {
    setPasswordVisibility((prevVisibility) => !prevVisibility);
  };

  return (
    <View style={styles.textInputContainer}>
      <View style={styles.textInput}>
        <TextInput
          {...rest}
          secureTextEntry={passwordVisibility}
          style={{ flex: 1 }}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.eyeIcon}
        >
          <FontAwesome5
            name={passwordVisibility ? "eye-slash" : "eye"}
            size={20}
            color="#555"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    width: wp(100),
    padding: 5,
    paddingHorizontal: wp(10),
    alignContent: "center",
    justifyContent: "center",
  },
  textInput: {
    flexDirection: "row",
    alignItems: "center",
    width: wp(80),
    padding: hp(2),
    borderColor: "#671111",
    borderWidth: 2,
    borderRadius: 10,
  },
  eyeIcon: {
    position: "absolute",
    right: wp(3),
    top: "50%",
    transform: [{ translateY: hp(0.8) }], // Adjust vertically to center the icon
  },
});
