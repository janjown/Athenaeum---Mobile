import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  runOnJS,
} from "react-native-reanimated";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const words = [
  "Do take care of this device. It is not yours.",
  "When you alis alis, please arrange the chairs para ocakes.",
  "Always observe silence in the library premises.",
  "Ask the librarian if you want to access to the books.",
  "Have fun reading!",
  "Sleeping is prohibited.",
];

const WordSlide = () => {
  const [index, setIndex] = useState(0);
  const opacity = useSharedValue(1);

  const updateIndex = () => {
    setIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      opacity.value = withTiming(
        0,
        { duration: 500, easing: Easing.out(Easing.ease) },
        (finished) => {
          if (finished) {
            runOnJS(updateIndex)();
            opacity.value = withTiming(1, {
              duration: 500,
              easing: Easing.out(Easing.ease),
            });
          }
        }
      );
    }, 7000);

    return () => clearInterval(interval);
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Text style={styles.word}>{words[index]}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(2),
    width: wp(62),
    height: hp(20),
    paddingHorizontal: wp(5),
  },
  word: {
    fontSize: 24,
    color: "#780000",
    textAlign: "center",
  },
});

export default WordSlide;
