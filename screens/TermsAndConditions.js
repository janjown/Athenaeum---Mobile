import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import ButtonPolicy from "../components/ButtonPolicy";

export default function TermsAndConditions() {
  const navigation = useNavigation();
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

        <Text style={styles.titleStyle}>Terms and Conditions</Text>
        <View style={styles.contents}>
          {/* Terms and Conditions */}
          <Text style={styles.contentStyle}>
            Athenaeum developers strictly remind you to read and understand
            carefully our terms and conditions. When reading, please focus
            especially on these factors. You read the agreement and then decide
            whether or not to accept it.
          </Text>

          <Text style={styles.sectionTitle}>
            About the Athenaeum Mobile Application
          </Text>
          <Text style={styles.contentStyle}>
            Athenaeum Mobile Application is developed due to the reason that the
            developer looks for a solution in order to provide and produce a
            digital library and attendance system to the library of EARIST –
            Cavite Campus. In which, students from ECC may view the available
            books from the library online, and will also make a transaction
            online such as reserving and borrowing books. Such these
            transactions there are corresponding policies and penalties over the
            actions of every user.
          </Text>

          <Text style={styles.sectionTitle}>
            Terms and Conditions on Creating User Account
          </Text>

          {/* Account Creation Policy */}
          <Text style={styles.subSectionTitle}>Creating an Account</Text>
          <Text style={styles.pointer}> 1.1 Registration: </Text>
          <Text style={styles.contentStyle}>
            During the registration process, all the credentials asked should be
            filled out honestly in the required fields. Also, the institutional
            gmail should be used.
          </Text>
          <Text style={styles.pointer}> 1.2 Logging in: </Text>
          <Text style={styles.contentStyle}>
            During the log in process, the two needed fields should be entered
            correctly.
          </Text>
          <Text style={styles.pointer}> 1.3 Account Tab: </Text>
          <Text style={styles.contentStyle}>
            In the account tab, the user will be able to edit their details
            accordingly.
          </Text>

          {/* Book Transactions */}
          <Text style={styles.sectionTitle}>
            Terms and Conditions on Book Transactions
          </Text>
          <Text style={styles.subSectionTitle}>Borrowing</Text>
          <Text style={styles.pointer}> 1.1 Damaged Books: </Text>
          <Text style={styles.contentStyle}>
            The damaged books should be replaced by a purchased book of the same
            amount or a similar book.
          </Text>
          <Text style={styles.pointer}> 1.2 Replacement: </Text>
          <Text style={styles.contentStyle}>
            The replacement of the book is required a day after the book was
            issued.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <ButtonPolicy
            text="Accept"
            onPress={() => navigation.navigate("Card Catalog")}
          />
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
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderColor: "#8b4513",
    borderWidth: 1,
    elevation: 2,
  },
  sectionTitle: {
    marginTop: hp(2),
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "left",
    color: "#495057",
  },
  subSectionTitle: {
    marginTop: hp(1),
    fontSize: 18,
    textAlign: "left",
    color: "#6c757d",
    fontFamily: "CreteRound-Regular",
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
    marginTop: hp(1),
    color: "#212529",
    fontFamily: "CreteRound-Regular",
  },
  buttonContainer: {
    marginTop: hp(3),
    alignItems: "center",
  },
});
