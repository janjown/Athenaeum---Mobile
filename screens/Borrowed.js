import { View, StyleSheet, FlatList, Image, Text } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
// Components
import CardView from "../components/CardView";
// Sample Data
import { books } from "../data_samples/bookData";

export default function Borrowed() {
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }); // Simulates of refreshing, remove value on deployment (Removed)
  };

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setLoadingMore(false);
    }); // Simulates loading more data, remove value on deployment
  };

  const renderBook = ({ item }) => (
    <View>
      <View>
        <CardView
          onPress={() => console.log("User tapped a book.")}
          book_title={item.book_title}
          book_author={item.book_author}
        />
      </View>
    </View>
  );

  const ListFooterComponent = () => {
    if (!loadingMore) return null;
    return (
      <View style={styles.footerContainer}>
        <LottieView
          style={styles.loaderStyle}
          source={require("../assets/animations/loader.json")}
          autoPlay
          loop
        />
      </View>
    );
  };

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
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/img/logo-white-ai-brushed.png")}
        />
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionText}>Borrowed</Text>
        </View>
      </View>

      <FlatList
        style={styles.flatlistContainer}
        /* data={books} */
        renderItem={renderBook}
        keyExtractor={(item, id) => id.toString()}
        ListEmptyComponent={emptyList}
        ListFooterComponent={ListFooterComponent}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
      />
      <StatusBar style="light" translucent={true} hidden={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  flatlistContainer: {
    marginTop: hp(0),
    marginLeft: wp(1),
    borderRadius: 35,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
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
    alignContent: "center",
    textAlign: "center",
    alignItems: "center",
    marginBottom: hp(2),
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
  buttonProfile: {
    width: wp(10),
    height: hp(5),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonAnimationProfile: {
    width: wp(10),
    height: hp(5),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSettings: {
    width: wp(10),
    height: hp(5),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonAnimationSettings: {
    width: wp(10),
    height: hp(5),
    justifyContent: "center",
    alignItems: "center",
  },
  animationContainer: {
    position: "absolute",
    flexDirection: "row",
    gap: wp(70),
  },
  footerContainer: {
    position: "relative",
    borderTopWidth: 0,
    borderColor: "#CED0CE",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: hp(20),
  },
  absoluteLoaderContainer: {
    position: "absolute",
    bottom: 100,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  loaderStyle: {
    position: "absolute",
    width: wp(20),
    height: hp(24),
    bottom: hp(5),
    justifyContent: "center",
    alignItems: "center",
  },
});
