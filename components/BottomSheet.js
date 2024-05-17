import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Sheet() {
  return (
    <View style={styles.container}>
      <Text>Sheet</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "red",
  },
});
