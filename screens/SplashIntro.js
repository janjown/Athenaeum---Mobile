import { StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import LottieView from "lottie-react-native";
import { useFonts } from "expo-font";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export default function SplashIntro() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => navigation.navigate("Login"), 5000);
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
        {/* Animated Title Text */}
        <Animated.Text
          entering={FadeInDown.delay(1600).springify().damping(7).mass(3)}
          style={styles.appTitle}
          className="font-bold absolute"
        >
          Athenaeum
        </Animated.Text>

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
  animation: {
    bottom: 30,
    height: 500,
    width: 500,
    marginBottom: 150,
  },
  appTitle: {
    top: 300,
    fontSize: 55,
    color: "#671111",
    fontFamily: "CreteRound-Regular",
  },
});
