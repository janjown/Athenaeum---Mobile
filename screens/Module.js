import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import { useFonts } from "expo-font";
import LottieView from "lottie-react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

// Components
import ButtonComponent from "../components/ButtonComponent";

export default function Module({ navigation }) {
  const [fontsLoaded] = useFonts({
    "CreteRound-Regular": require("../assets/fonts/CreteRound-Regular.ttf"),
    "Figtree-VariableFont": require("../assets/fonts/Figtree-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#7D0707" />
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centered}>
        <Image style={styles.logo} source={require("../assets/img/logo.png")} />
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            color: "#671111",
            fontFamily: "CreteRound-Regular",
          }}
        >
          Are you a...?
        </Text>
      </View>
      <View style={styles.animationContainer}>
        <Animated.View entering={FadeInDown.duration(700)}>
          <LottieView
            style={styles.animationStudent}
            source={require("../assets/animations/student.json")}
            autoPlay
            loop
          />
        </Animated.View>
        <Animated.View entering={FadeInDown.duration(700)}>
          <LottieView
            style={styles.animationFaculty}
            source={require("../assets/animations/faculty.json")}
            autoPlay
            loop
          />
        </Animated.View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.studentContainer}>
          <ButtonComponent
            text={"Student"}
            onPress={() => navigation.navigate("Student Registration")}
          />
        </View>
        <View style={styles.facultyContainer}>
          <ButtonComponent
            text={"Faculty"}
            onPress={() => navigation.navigate("Faculty Registration")}
          />
        </View>
      </View>
      <Text
        style={{
          fontFamily: "CreteRound-Regular",
        }}
      >
        EARIST - Cavite Campus @2024 Athenaeum
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    gap: wp(5),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp(9),
  },
  studentContainer: {
    flexDirection: "column",
  },
  animationContainer: {
    flexDirection: "column",
  },
  facultyContainer: {
    flexDirection: "column",
  },
  animationStudent: {
    width: wp(32),
    right: wp(0),
    height: hp(20),
  },
  animationFaculty: {
    width: wp(32),
    left: wp(2),
    height: hp(21.5),
  },
  animationContainer: {
    position: "absolute",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: wp(17),
  },
});
