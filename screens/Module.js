import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import LottieView from "lottie-react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

// Components
import ButtonComponent from "../components/ButtonComponent";
export default function Module({ text }) {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.centered}>
        <Image style={style.logo} source={require("../assets/img/logo.png")} />
        <Text style={style.questionText}>Are you a...?</Text>
      </View>
      <View style={style.buttonContainer}>
        <View style={style.studentContainer}>
          <ButtonComponent text={"Student"} />
        </View>
        <View style={style.facultyContainer}>
          <ButtonComponent text={"Faculty"} />
        </View>
      </View>
      <Text style={style.school}>EARIST - Cavite Campus</Text>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginBottom: hp(10),
  },
  logo: {
    width: wp(60),
    height: hp(30),
    resizeMode: "contain",
  },
  questionText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#671111",
    fontFamily: "CreteRound-Regular",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    gap: wp(5),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp(10),
  },
  studentContainer: {
    flexDirection: "column",
  },
  animationContainer: {
    flexDirection: "row",
  },
  /*  animations: {
    height: hp(100),
    width: wp(100),
  }, */
  facultyContainer: {
    flexDirection: "column",
  },
});
