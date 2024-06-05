import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ButtonPolicy from "../components/ButtonPolicy";

export default function PrivacyPolicy() {
  const navigation = useNavigation();
  const handleButton = () => {
    navigation.navigate("Card Catalog");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/img/logo.png")}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.titleStyle}>Privacy Policy</Text>
        <View style={styles.contents}>
          <Text style={styles.pointer}>1. Introduction</Text>
          <Text style={styles.contentStyle}>
            Athenaeum: ECC Library Management System is committed to protecting
            your privacy. This privacy policy describes how our system collects,
            uses, and shares your information when you use and interact with our
            services and applies both students and faculty members. We will not
            use your data in accordance with the statutory data protection
            regulations and this data protection declaration.
            {"\n"}
            {"\n"}
            We respect your privacy and want to protect your personal
            information. This privacy policy explains how we collect, use, and
            disclose your information.
          </Text>

          <Text style={styles.pointer}>2. Information We Collect</Text>
          <Text style={styles.contentStyle}>
            We collect personal information such as your name, email address,
            and student number when you register for an account. We also collect
            information about the books you borrow, your borrowing history, and
            any fines or fees associated with your account.
          </Text>

          <Text style={styles.pointer}>3. How We Use Your Information</Text>
          <Text style={styles.contentStyle}>
            We use your information to manage your library account, provide you
            with services, communicate with you, and improve our system. We do
            not sell or share your personal information with third parties for
            marketing purposes.
          </Text>

          <Text style={styles.pointer}>4. How We Protect Your Information</Text>
          <Text style={styles.contentStyle}>
            We implement a variety of security measures to maintain the safety
            of your personal information. Your personal information is contained
            behind secured networks and is only accessible by a limited number
            of persons who have special access rights to such systems.
          </Text>

          <Text style={styles.pointer}>5. Your Rights</Text>
          <Text style={styles.contentStyle}>
            You have the right to access, correct, your personal information at
            any time. Please contact us if you wish to exercise these rights.
          </Text>

          <Text style={styles.pointer}>6. Changes to This Privacy Policy</Text>
          <Text style={styles.contentStyle}>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </Text>

          <Text style={styles.pointer}>7. Contact Us</Text>
          <Text style={styles.contentStyle}>
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
        </View>

        <View style={styles.buttonContainer}>
          <ButtonPolicy text="Accept" onPress={handleButton} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingHorizontal: wp(5),
  },
  logoContainer: {
    height: hp(12),
    width: wp(80),
    alignSelf: "center",
    marginTop: hp(3),
  },
  logo: {
    height: hp(15),
    width: wp(80),
  },
  titleStyle: {
    marginTop: hp(3),
    fontSize: 24,
    textAlign: "center",
    color: "#343a40",
    fontFamily: "CreteRound-Regular",
  },
  contents: {
    marginTop: hp(2),
    width: wp(90),
    alignSelf: "center",
    backgroundColor: "#fff",
    padding: wp(5),
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    borderColor: "#8b4513",
    borderWidth: 1,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  contentStyle: {
    fontSize: 16,
    marginTop: hp(1),
    textAlign: "justify",
    color: "#6c757d",
    lineHeight: 22,
    fontFamily: "Figtree-VariableFont",
  },
  pointer: {
    marginTop: hp(2),
    color: "#212529",
    fontSize: 18,
    fontFamily: "CreteRound-Regular",
  },
  buttonContainer: {
    marginTop: hp(3),
    alignItems: "center",
  },
});
