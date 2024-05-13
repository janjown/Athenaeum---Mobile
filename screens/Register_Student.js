import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";

// Components
import DropdownComponent from "../components/dropDown_registration";
import TextInputComponent from "../components/TextInputComponent";
import TextInputPassword from "../components/TextInputPassword";

export default function Register_Student({ navigation }) {
  const handleRegister = () => {
    navigation.navigate("Login");
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -500} // Adjust depending on platform
      >
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <Image
              style={styles.logo}
              source={require("../assets/img/logo-no-background.png")}
            />
          </View>
          <View style={styles.programSelection}>
            <DropdownComponent />
          </View>
          <View style={styles.fillUpForm}>
            <TextInputComponent placeholder={"ID Number"} />
            <TextInputComponent placeholder={"Full Name"} />
            <TextInputComponent
              placeholder={"Institutional Email"}
              keyboardType={"email-address"}
            />
            <TextInputComponent
              placeholder={"Student Number"}
              keyboardType={"default"}
            />
            <TextInputComponent placeholder={"Certificate of Registration"} />
            <TextInputPassword placeholder={"Password"} />
          </View>
          <View>
            <TouchableOpacity
              style={styles.buttonRegister}
              onPress={handleRegister}
            >
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: hp(2),
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: hp(15), // Adjust as needed for bottom padding
  },
  logo: {
    height: hp(20),
    width: wp(60),
    maxWidth: wp(601),
    marginBottom: hp(0),
    resizeMode: "contain",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  programSelection: {
    width: wp(100),
    marginTop: hp(1), // Adjust as needed for spacing
  },
  fillUpForm: {
    flex: 1,
    marginTop: hp(2),
    width: wp(100),
  },
  buttonRegister: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#671111",
    fontFamily: "CreteRound-Regular",
    borderRadius: 10,
    marginTop: hp(5),
    height: hp(5),
    width: wp(50),
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    fontFamily: "CreteRound-Regular",
  },
});
