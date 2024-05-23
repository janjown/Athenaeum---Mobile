import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import ButtonNormal from "../components/ButtonNormal";
export default function Account() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/img/logo-white-ai-brushed.png")}
        />
        {/* Section Title */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionText}>Account</Text>
        </View>
      </View>
      {/* Body */}
      <View style={styles.bodyContainer}>
        <TouchableOpacity activeOpacity={0.7} style={styles.profileContainer}>
          <Image
            source={require("../assets/img/EARIST-LOGO.png")}
            style={styles.profilePicture}
          />
        </TouchableOpacity>
        {/* User Info */}
        <View style={styles.userInfo}>
          <Text style={[styles.accountName]}>John Henry C. Angas</Text>
          <Text style={styles.accountStudentNumber}>20-0012-OL</Text>
        </View>
        {/* Functionalities */}
        <View>
          <ButtonNormal backgroundColor={"red"} />
          <ButtonNormal backgroundColor={"violet"} />
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
  bodyContainer: {
    backgroundColor: "white",
    alignItems: "center",
    alignContent: "center",
  },
  profileContainer: {
    marginBottom: hp(2),
  },
  profileBG: {
    backgroundColor: "red",
  },
  profilePicture: {
    width: wp(30),
    height: hp(20),
  },
  userInfo: {
    alignItems: "center",
    alignContent: "center",
  },
});
