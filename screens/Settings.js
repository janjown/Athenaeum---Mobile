import { StyleSheet, Text, View, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";

export default function Settings() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/img/logo-white-ai-brushed.png")}
        />
        {/* Section Title */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionText}>Settings</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    alignContent: "center",
  },
  headerContainer: {
    height: hp(18),
    width: wp(100),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#780000",
  },
  logo: {
    width: wp(50),
    height: hp(10),
    marginTop: hp(3),
  },
  sectionContainer: {
    width: wp(50),
    height: hp(5),
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    alignItems: "center",
    marginBottom: hp(2),
  },
  sectionText: {
    fontFamily: "CreteRound-Regular",
    fontSize: 20,
    color: "white",
    marginTop: hp(1),
    marginBottom: hp(1),
    marginLeft: wp(0),
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
});
