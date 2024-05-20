import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  useSharedValue,
  withSpring,
  withDecay,
} from "react-native-reanimated";
import React from "react";
export default function ComponentMaker() {
  const width = useSharedValue(100);
  const height = useSharedValue(100);
  const handlePress = () => {
    width.value = withDecay(width.value + 100);
    height.value = withSpring(height.value + 100);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={{
          width,
          height,
          backgroundColor: "violet",
        }}
      />
      <Button onPress={handlePress} title="Click me" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontSize: 20,
    color: "#333",
  },
});
