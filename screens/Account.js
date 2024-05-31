import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useFonts } from "expo-font";
import ButtonNormal from "../components/ButtonNormal";
import TextInputPassword from "../components/TextInputPassword";

export default function Account() {
  const [fontsLoaded] = useFonts({
    "CreteRound-Regular": require("../assets/fonts/CreteRound-Regular.ttf"),
    "Figtree-VariableFont": require("../assets/fonts/Figtree-VariableFont_wght.ttf"),
  });

  const [isTextInputFocused, setIsTextInputFocused] = useState(false);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#7D0707" />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.headerContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/img/logo-white-ai-brushed.png")}
        />
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionText}>Account</Text>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        {!isTextInputFocused && (
          <>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.profileContainer}
            >
              <Image
                source={require("../assets/img/EARIST-LOGO.png")}
                style={styles.profilePicture}
              />
            </TouchableOpacity>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>John Henry C. Angas</Text>
              <Text style={styles.userDetails}>20-0012-OL</Text>
              <Text style={styles.userDetails}>
                angas.johnhenry.eccbscs@gmail.com
              </Text>
              <Text style={styles.userDetails}>BSCS</Text>
            </View>
          </>
        )}
        <View style={styles.updatePassword}>
          <TextInputPassword
            onFocus={() => setIsTextInputFocused(true)}
            onBlur={() => setIsTextInputFocused(false)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <ButtonNormal backgroundColor={"#780000"} text={"Update Password"} />
          <ButtonNormal
            backgroundColor={"red"}
            text={"Delete Account"}
            fontFamily={"Figtree-VariableFont"}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  headerContainer: {
    height: hp(18),
    width: wp(100),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#780000",
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
    textAlign: "center",
    marginBottom: hp(2),
  },
  sectionText: {
    fontFamily: "CreteRound-Regular",
    fontSize: 20,
    color: "white",
    marginTop: hp(1),
    marginBottom: hp(1),
    textAlign: "center",
  },
  bodyContainer: {
    backgroundColor: "white",
    alignItems: "center",
    alignContent: "center",
    width: wp(90),
    marginTop: hp(2),
  },
  profileContainer: {
    marginBottom: hp(2),
  },
  profilePicture: {
    width: wp(30),
    height: hp(20),
  },
  userInfo: {
    alignItems: "center",
    alignContent: "center",
    marginTop: hp(1),
  },
  userName: {
    fontSize: 20,
    fontFamily: "Figtree-VariableFont",
    fontWeight: "bold",
  },
  userDetails: {
    fontSize: 15,
    fontFamily: "Figtree-VariableFont",
  },
  updatePassword: {
    marginTop: hp(5),
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginTop: hp(5),
    marginBottom: hp(2),
    width: wp(80),
    height: hp(10),
    alignItems: "center",
    gap: hp(2),
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
