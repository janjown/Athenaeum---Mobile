import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => setIsDarkMode((previousState) => !previousState);

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

      <View style={styles.settingsContainer}>
        {/* Account Settings */}
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Privacy Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Language</Text>
        </TouchableOpacity>

        {/* About Section */}
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Terms of Service</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "white", // Set background color to white
  },
  headerContainer: {
    height: hp(18),
    width: wp(100),
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#780000", // Set background color for header
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
    alignContent: "center",
    textAlign: "center",
    marginBottom: hp(2),
  },
  sectionText: {
    fontFamily: "CreteRound-Regular",
    fontSize: 20,
    color: "white", // Set text color to white
    marginTop: hp(1),
    marginBottom: hp(1),
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  settingsContainer: {
    width: wp(90),
    marginTop: hp(2),
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: "#dcdcdc",
  },
  settingText: {
    fontSize: 20,
    color: "#333", // Set text color to dark gray
  },
});
