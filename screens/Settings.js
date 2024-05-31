import { View, StyleSheet, Image, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Borrowed() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/img/logo-white-ai-brushed.png")}
        />
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionText}>Settings</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    height: hp(18),
    width: wp(100),
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: "#780000",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
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
    marginBottom: hp(2),
  },
  sectionText: {
    fontFamily: "CreteRound-Regular",
    fontSize: 20,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
  },
});
