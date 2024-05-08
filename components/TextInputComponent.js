import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function TextInputComponent(props) {
  return (
    <View style={styles.textInputContainer}>
      <View style={styles.textInput}>
        <TextInput {...props} />
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
    width: wp(80),
    padding: hp(2),
    borderColor: "#671111",
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
  },
});
