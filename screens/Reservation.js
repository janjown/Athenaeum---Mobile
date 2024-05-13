import { View, StyleSheet, FlatList, Image, Text } from "react-native";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
// Component Imports
import CardView from "../components/CardView";
import bookData, { books } from "../data_samples/bookData";
export default function CardCatalog() {
  /* Itong part na 'to, it will act as a refresher.
     Ikaw na bahala mag fetch ng data and how many 
     data yung ife-fetch per refresh. - Yorme     */

  const [refreshing, setRefreshing] = useState(false);
  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  /* end of Refresher  */

  const renderBook = ({ item }) => (
    /* CardView Renderer */
    <View>
      <View>
        <CardView book_title={item.book_title} book_author={item.book_author} />
      </View>
    </View>
  );

  /* end of CardView Renderer */
  /* if list is empty */
  const emptyList = (
    <View style={styles.emptyListContainer}>
      <Image
        style={styles.emptyListImage}
        source={require("../assets/img/empty-list.png")}
      />
      <Text style={styles.emptyListText}>Something went wrong.</Text>
    </View>
  );
  return (
    /* Container */
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/img/logo-white-ai-brushed.png")}
        />
        {/* Section Title */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionText}>Reservation</Text>
        </View>
      </View>

      <FlatList
        /* data={books} */
        renderItem={renderBook}
        keyExtractor={(item, id) => id.toString()}
        ListEmptyComponent={emptyList}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
      <StatusBar style="light" translucent={true} hidden={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    height: hp(18),
    width: wp(100),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#780000",
  },
  logo: {
    width: wp(50),
    height: hp(13),
    marginTop: hp(3),
  },
  sectionContainer: {
    width: wp(50),
    height: hp(5),
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    alignItems: "center",
    marginTop: hp(-3),
  },

  sectionText: {
    fontFamily: "CreteRound-Regular",
    fontSize: 20,
    color: "white",
    marginTop: hp(1),
    marginBottom: hp(1),
    marginLeft: wp(0),
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  emptyListText: {
    fontFamily: "CreteRound-Regular",
    fontSize: 20,
    color: "#848A86",
    marginTop: hp(-4),
    marginBottom: hp(1),
    marginLeft: wp(2),
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  emptyListImage: {
    height: hp(30),
    width: wp(50),
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp(5),
    alignContent: "center",
    marginTop: hp(5),
  },
  emptyListContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop: hp(20),
    marginBottom: hp(20),
    marginLeft: wp(20),
    marginRight: wp(20),
    height: hp(20),
    width: wp(60),
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
});