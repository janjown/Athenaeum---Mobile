import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React, { useState, useEffect } from "react";
// Components
import SearchBarComponent from "../components/SearchBarComponent";
import CardView from "../components/CardView";

// Sample Data
import { search_books } from "../data_samples/searchData/";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [searched, setSearched] = useState(false);

  // Search Filter Function
  const handleSearch = () => {
    const filtered = search_books.filter(
      (book) =>
        book.book_title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.book_author.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(filtered);
    setSearched(true);
  };

  // If Search Bar is empty
  const emptySearch = (
    <View style={styles.emptyListContainer}>
      <Image
        style={styles.emptyListImage}
        source={require("../assets/img/cat_search.png")}
      />
      <Text style={styles.emptyListText}>Search something. {"\n"}- Meemaw</Text>
    </View>
  );
  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  // CardView renderer
  const renderBook = ({ item }) => (
    <View>
      <CardView
        onPress={() => console.log("User tapped a book.")}
        book_title={item.book_title}
        book_author={item.book_author}
      />
    </View>
  );

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
          <Text style={styles.sectionText}>Search</Text>
        </View>
      </View>
      <View style={styles.searchBarContainer}>
        <SearchBarComponent
          style={styles.searchBar}
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSearch={handleSearch}
        />
      </View>
      {!searched || searchQuery === "" ? (
        emptySearch
      ) : (
        <FlatList
          style={styles.flatlistContainer}
          data={filteredBooks}
          renderItem={renderBook}
          keyExtractor={(item, id) => id.toString()}
          ListEmptyComponent={emptySearch}
          refreshing={refreshing}
          onRefresh={handleRefresh}
          showsVerticalScrollIndicator={false}
        />
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
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
    marginBottom: hp(2),
  },
  sectionText: {
    fontFamily: "CreteRound-Regular",
    fontSize: 20,
    color: "white",
    marginTop: hp(1),
    marginBottom: hp(1),
    marginLeft: wp(0),
    textAlign: "center",
  },
  searchBarContainer: {
    maxHeight: hp(10),
    maxWidth: wp(80),
    marginTop: hp(2),
  },
  searchBar: {
    width: wp(80),
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
  },
  emptyListContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginTop: hp(8),
    marginBottom: hp(8),
    marginLeft: wp(8),
    marginRight: wp(8),
    height: hp(20),
    width: wp(60),
  },
  flatlistContainer: {
    width: wp(100),
  },
});
