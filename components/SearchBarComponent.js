import React from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBarComponent({
  style,
  value,
  onChangeText,
  onSearch,
}) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.textInputContainer}>
        <View style={styles.textInput}>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Search..."
            placeholderTextColor="#999"
            value={value}
            onChangeText={onChangeText}
          />
        </View>
      </View>
      <View style={styles.searchBarButton}>
        <TouchableOpacity style={styles.searchIcon} onPress={onSearch}>
          <Ionicons name={"search"} size={30} color="#555" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: wp(85),
  },
  textInputContainer: {
    width: wp(100),
    padding: 5,
    paddingHorizontal: wp(10),
    alignContent: "center",
    justifyContent: "center",
  },
  textInput: {
    flexDirection: "row",
    alignItems: "center",
    width: wp(80),
    padding: hp(2),
    borderColor: "#671111",
    borderWidth: 2,
    borderRadius: 10,
  },
  textInputStyle: {
    paddingLeft: wp(9),
    width: wp(65),
  },
  searchBarButton: {
    position: "absolute",
    right: wp(12), // Adjusted position to right
  },
  searchIcon: {
    position: "abosolute",
    marginRight: wp(60),
    bottom: hp(1),
    transform: [{ translateY: hp(1) }], // Adjust vertically to center the icon
  },
});
