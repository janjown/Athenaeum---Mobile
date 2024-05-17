import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

export default function ComponentMaker() {
  return (
    <SafeAreaView styles={styles.container}>
      <Text style={styles.text}>ComponentMaker</Text>
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
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
  },
});
