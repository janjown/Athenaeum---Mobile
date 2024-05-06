import { View, Text } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const loaderQuotes = [
  "“Books are the mirrors of the soul.” \n Virginia Woolf",
  "“Books are a uniquely portable magic.” \n Stephen King",
  "“A book is a gift you can open again and again.” \n Garrison Keillor",
  '"The developer of this is cute and handsome!" \n JownJown',
];
export default function Account() {
  return (
    <View style={styles.container}>
      <Text>Account</Text>
    </View>
  );
}

const styles = React.createClass({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});
