import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

export default function TextInputComponent({ ...rest }) {
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <View style={styles.textInput}>
          <TextInput style={styles.textInputStyle} {...rest} />
        </View>
      </View>
      <View style={styles.searchBarButton}>
        <TouchableOpacity style={styles.eyeIcon}>
          <Ionicons name={"search"} size={30} color="#555" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
  textInput: {
    flexDirection: "row",
    alignItems: "center",
    width: wp(80),
    padding: hp(2),
    borderColor: "#671111",
    borderWidth: 2,
    borderRadius: 10,
    paddingRight: wp(20),
  },
  textInputStyle: {
    paddingLeft: wp(9),
  },
  searchBarButton: {
    position: "absolute",
  },
  eyeIcon: {
    position: "abosolute",
    marginRight: wp(68),
    bottom: hp(1),
    transform: [{ translateY: hp(1) }], // Adjust vertically to center the icon
  },
});
