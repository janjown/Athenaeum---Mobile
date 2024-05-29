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

  const dynamicStyles = isDarkMode ? darkStyles : lightStyles;

  return (
    <View style={[styles.container, dynamicStyles.container]}>
      <View style={[styles.headerContainer, dynamicStyles.headerContainer]}>
        <Image
          style={styles.logo}
          source={require("../assets/img/logo-white-ai-brushed.png")}
        />
        <View style={styles.sectionContainer}>
          <Text style={dynamicStyles.sectionText}>Settings</Text>
        </View>
      </View>

      <View style={styles.settingsContainer}>
        {/* Dark Mode Settings */}
        <View style={styles.settingItem}>
          <Text style={dynamicStyles.settingText}>Dark Mode</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleDarkMode}
            value={isDarkMode}
          />
        </View>

        {/* Account Settings */}
        <TouchableOpacity style={styles.settingItem}>
          <Text style={dynamicStyles.settingText}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Text style={dynamicStyles.settingText}>Privacy Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Text style={dynamicStyles.settingText}>Language</Text>
        </TouchableOpacity>

        {/* About Section */}
        <View style={styles.sectionContainer}>
          <Text style={dynamicStyles.sectionText}>About</Text>
        </View>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={dynamicStyles.settingText}>Terms of Service</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={dynamicStyles.settingText}>Privacy Policy</Text>
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
  },
  headerContainer: {
    height: hp(18),
    width: wp(100),
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
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
    alignContent: "center",
    textAlign: "center",
    marginBottom: hp(2),
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
});

const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  headerContainer: {
    backgroundColor: "#780000",
  },
  sectionText: {
    fontFamily: "CreteRound-Regular",
    fontSize: 20,
    color: "white",
    marginTop: hp(1),
    marginBottom: hp(1),
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  settingText: {
    fontSize: 18,
    color: "#333",
  },
});

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: "#333",
  },
  headerContainer: {
    backgroundColor: "#555",
  },
  sectionText: {
    fontFamily: "CreteRound-Regular",
    fontSize: 20,
    color: "white",
    marginTop: hp(1),
    marginBottom: hp(1),
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  settingText: {
    fontSize: 18,
    color: "white",
  },
});
