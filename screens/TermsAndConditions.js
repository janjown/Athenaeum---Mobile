import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import ButtonComponent from "../components/ButtonComponent";
export default function TermsAndConditions() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
            Athenaeum developers hereby strictly reminds you to read and
            understand carefully to our terms and conditions. When reading,
            please focus especially on these factors. You read the agreement and
            then decide whether or not to accept it.
          </Text>

          <Text style={styles.titleStyle}>
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
          <Text style={styles.titleStyle}>
            Terms and Conditions on Creating User Account
          </Text>

          {/* Account Creation Policy */}
          <Text style={styles.titleStyle}>Creating an Account</Text>
          <Text style={styles.pointer}> 1.1 Registration: </Text>
          <Text style={styles.contentStyle}>
            During the registration process the all the credentials asked should
            be filled out honestly to the needed field. Also, the institutional
            Gmail should be used.
          </Text>
          <Text style={styles.pointer}> 1.2 Logging in: </Text>
          <Text style={styles.contentStyle}>
            During the logging in process, the two needed filled should be
            thrice try only, once it already reaches it logging in tries, it
            will be restricted and locked.
          </Text>
          <Text style={styles.pointer}> 1.3 Account Tab: </Text>
          <Text style={styles.contentStyle}>
            In account tab, the user will be able to edit his details
            accordingly.
          </Text>
          {/* Book Transactions */}
          <Text style={styles.titleStyle}>
            Terms and Conditions on Book Transactions
          </Text>
          <Text style={styles.titleStyle}>Borrowing</Text>
          <Text style={styles.pointer}> 1.1 Overdue: </Text>
          <Text style={styles.contentStyle}>
            The overdue books will be notified on the status field in the user
            account.
          </Text>

          <Text style={styles.pointer}> 1.2 Lost Books or Damage books: </Text>
          <Text style={styles.contentStyle}>
            The lost books should be replaced by a book purchased book amount or
            the similar book.
          </Text>
          <Text style={styles.pointer}> 1.3 Replacement: </Text>
          <Text style={styles.contentStyle}>
            The replacement of the book is a day after the book was issued.
          </Text>
          <Text style={styles.titleStyle}>Reservation</Text>
          <Text style={styles.pointer}> 2.1 Reservation Time: </Text>
          <Text style={styles.contentStyle}>
            The user who will make a reservation will reserve during the library
            hours. All transactions should occur during library hours.
          </Text>
          <Text style={styles.pointer}> 2.2 Reservation Status: </Text>
          <Text style={styles.contentStyle}>
            The user who will make a reservation will wait until the admin will
            accept or decline the user reservation.
          </Text>
          <Text style={styles.pointer}> 2.3 Reservation Qualification: </Text>
          <Text style={styles.contentStyle}>
            Updated Certificate of Registration in ECC.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <ButtonComponent
            text="Accept"
            onPress={() => navigation.navigate("Settings")}
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
    height: hp(30),
    width: wp(80),
    bottom: hp(5),
    alignSelf: "center",
  },
  titleStyle: {
    marginTop: hp(7),
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
  },
  contents: {
    width: wp(100),
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
