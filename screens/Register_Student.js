import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";

// Components
import DropdownComponent from "../components/dropDown_registration";
import TextInputComponent from "../components/TextInputComponent";

export default function Register_Student({}) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={require("../assets/img/logo-no-background.png")}
        />
      </View>
      <View style={styles.programSelection}>
        <DropdownComponent />
      </View>
      <View style={styles.fillUpForm}>
        <TextInputComponent />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  logo: {
    height: hp(20),
    width: wp(60),
    maxWidth: wp(601),
    marginBottom: hp(5),
    resizeMode: "contain",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  programSelection: {
    width: wp(100),
  },
  fillUpForm: {
    width: wp(100),
  },
});
