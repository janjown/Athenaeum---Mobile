import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import ButtonComponent from "../components/ButtonComponent";
export default function PrivacyPolicy() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/img/logo-no-background.png")}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.titleStyle}>Privacy Policy</Text>
        <Text style={styles.pointer}>{"\t"}1. Introduction </Text>
        <View style={styles.contents}>
          {/* Terms and Conditions */}
          <Text style={styles.contentStyle}>
            {"\n"}
            Athenaeum: ECC Library Management System is committed to protecting
            your privacy. This privacy policy describes how our system collects
            uses, and shares your information when you use and interact with our
            services and applies both students and faculty members. We will not
            use your data in accordance with the statutory data protection
            regulations and this data protection declaration.
            {"\n"}
            {"\n"}
            We respect your privacy and want to protect your personal
            information. This privacy policy explains how we collect, use, and
            disclose your information.
            {"\n"}
            {"\n"}
          </Text>
        </View>

        <Text style={styles.pointer}>{"\t"}2. Information We Collect </Text>
        <Text style={styles.contentStyle}>
          {"\n"}
          We collect personal information such as your name, email address, and
          student number when you register for an account. We also collect
          information about the books you borrow, your borrowing history, and
          any fines or fees associated with your account.
          {"\n"}
          {"\n"}
        </Text>

        <Text style={styles.pointer}>
          {"\t"}3. How We Use Your Information{" "}
        </Text>
        <Text style={styles.contentStyle}>
          {"\n"}
          We use your information to manage your library account, provide you
          with services, communicate with you, and improve our system. We do not
          sell or share your personal information with third parties for
          marketing purposes.
          {"\n"}
          {"\n"}
        </Text>

        <Text style={styles.pointer}>
          {"\t"}4. How We Protect Your Information{" "}
        </Text>
        <Text style={styles.contentStyle}>
          {"\n"}
          We implement a variety of security measures to maintain the safety of
          your personal information. Your personal information is contained
          behind secured networks and is only accessible by a limited number of
          persons who have special access rights to such systems.
          {"\n"}
          {"\n"}
        </Text>

        <Text style={styles.pointer}>{"\t"}5. Your Rights </Text>
        <Text style={styles.contentStyle}>
          {"\n"}
          You have the right to access, correct, your personal information at
          any time. Please contact us if you wish to exercise these rights.
          {"\n"}
          {"\n"}
        </Text>

        <Text style={styles.pointer}>
          {"\t"}6. Changes to This Privacy Policy{" "}
        </Text>
        <Text style={styles.contentStyle}>
          {"\n"}
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
          {"\n"}
          {"\n"}
        </Text>

        <Text style={styles.pointer}>{"\t"}7. Contact Us </Text>
        <Text style={styles.contentStyle}>
          {"\n"}
          If you have any questions about this Privacy Policy you can:
          {"\n"}
          {"\n"}
          Email us at:
          {"\n"}
          Athenaeum.ecc@gmail.comDevelopers
          {"\n"}
          {"\n"}
          <Text>or</Text>
          {"\n"}
          {"\n"}
          Contact us at 0926-708-1232
        </Text>
        <View style={styles.buttonContainer}>
          <ButtonComponent
            text="Accept"
            /*  onPress={() => navigation.navigate("First Time Install")} */
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    height: hp(12),
    width: wp(80),
    alignSelf: "center",
  },
  logo: {
    height: hp(40),
    width: wp(80),
    bottom: hp(15),
    alignSelf: "center",
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
  },
  contents: {
    width: wp(100),
    gap: 5,
  },
  contentStyle: {
    fontSize: 15,

    width: wp(90),
    alignSelf: "center",
    alignContent: "center",
    textAlign: "justify",
  },
  pointer: {
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: hp(3),
    height: hp(10),
  },
});
