import { StyleSheet, SafeAreaView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import LottieView from "lottie-react-native";
import { useFonts } from "expo-font";
import Animated, {
  BounceInLeft,
  BounceInRight,
  FadeInDown,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function SplashIntro() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => navigation.navigate("Login"), 7000);
  }, []);

  let [fontsLoaded] = useFonts({
    "CreteRound-Regular": require("../assets/fonts/CreteRound-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <SafeAreaView
        style={styles.container}
        className="flex-1 justify-center items-center dark:bg-neutral-900"
      >
        <Animated.Image
          entering={FadeInDown.delay(1200).springify()}
          style={styles.logo}
          source={require("../assets/img/logo.png")}
        />
        {/* Animated Title Text */}
        <Animated.Text
          entering={FadeInDown.delay(1600).springify().damping(7).mass(3)}
          style={styles.appTitle}
          className="font-bold absolute"
        >
          ATHENAEUM
        </Animated.Text>
        <View style={styles.inarte}>
          <Animated.Text
            entering={BounceInLeft.delay(1800)}
            style={styles.appTitle2}
            className="font-bold absolute"
          >
            RE
          </Animated.Text>
          <Animated.Text
            entering={BounceInRight.delay(2000)}
            style={styles.appTitle3}
            className="font-bold absolute"
          >
            WORK
          </Animated.Text>
        </View>

        {/* Lottie Animation */}
        <LottieView
          style={styles.animation}
          source={require("../assets/animations/splash_intro.json")}
          autoPlay={true}
          loop={false}
        />
        <StatusBar hidden={true} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  logo: {
    top: hp(50),
    height: hp(30),
    width: wp(50),
    marginTop: hp(20),
  },
  animation: {
    top: hp(5),
    height: hp(73),
    width: wp(100),
    marginBottom: hp(70),
  },
  inarte: {
    flexDirection: "row",
  },
  appTitle: {
    top: hp(55),
    fontSize: 50,
    color: "#671111",
    fontFamily: "CreteRound-Regular",
  },
  appTitle2: {
    top: hp(55),
    fontSize: 40,
    color: "#cdcf65",
    fontFamily: "CreteRound-Regular",
  },
  appTitle3: {
    top: hp(55),
    fontSize: 40,
    color: "#cdcf65",
    fontFamily: "CreteRound-Regular",
  },
});
