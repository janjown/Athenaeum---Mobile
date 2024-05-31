import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const data = [
  {
    label: "Bachelor of Science in Business Administration (BSBA)",
    value: "1",
  },
  { label: "Bachelor of Science in Computer Science (BSCS)", value: "2" },
  { label: "Bachelor of Science in Information Technology (BSIT)", value: "3" },
  { label: "Bachelor of Science in Hospitality Management (BSHM)", value: "4" },
  { label: "Bachelor of Science in Office Administration (BSOA)", value: "5" },
  {
    label: "Bachelor of Science in Industrial Technology (BSIT)",
    value: "6",
    children: [
      {
        label: "Industrial Technology",
        value: "industrial",
        children: [
          { label: "Electronic Technology (BSIT-ELENIC", value: "sub1" },
          { label: "Electrical Technology (BSIT-ELECAL)", value: "sub2" },
          { label: "Automotive Technology (BSIT-AT)", value: "sub3" },
          { label: "Drafting Technology (BSIT-DT)", value: "sub4" },
          { label: "Food Technology (BSIT-FT)", value: "sub5" },
        ],
      },
    ],
  },
  { label: "Bachelor of Science in Psychology (BSP)", value: "7" },
  { label: "Bachelor of Science in Criminology (BSCRIM)", value: "8" },
  {
    label: "Bachelor of Science in Technology and Livelihood Education",
    value: "9",
  },
];

const DropdownComponentFaculty = () => {
  const [programValue, setProgramValue] = useState(null);
  const [subCategoryValue, setSubCategoryValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "#671111" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={hp(30)}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Department" : "Please select your department"}
        searchPlaceholder="Search"
        value={programValue}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setProgramValue(item.value);
          if (item.value !== "6") {
            setSubCategoryValue(null);
          }
        }}
        renderCustomItem={(item) => (
          <View style={styles.labelContainer}>
            <Text style={styles.label}>{item.label}</Text>
          </View>
        )}
      />
      {programValue === "6" && (
        <Dropdown
          style={styles.dropdown}
          data={data.find((item) => item.value === "6").children[0].children}
          labelField="label"
          valueField="value"
          placeholder="Major in"
          value={subCategoryValue}
          onChange={(item) => setSubCategoryValue(item.value)}
          renderCustomItem={(item) => (
            <View style={styles.labelContainer}>
              <Text style={styles.label}>{item.label}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default DropdownComponentFaculty;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  dropdown: {
    width: wp(79),
    marginBottom: 10,
    height: 60,
    borderColor: "#671111",
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  labelContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap", // Allow text to wrap when it reaches max width
  },
  label: {
    fontSize: 14,
    fontWeight: "400",
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
