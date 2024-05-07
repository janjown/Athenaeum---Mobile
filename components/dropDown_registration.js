import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

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
          { label: "Sub Category 1", value: "sub1" },
          { label: "Sub Category 2", value: "sub2" },
        ],
      },
    ],
  },
  { label: "Bachelor of Science in Psychology (BSP)", value: "7" },
  { label: "Bachelor of Science in Criminology (BSCRIM)", value: "7" },
  {
    label: "Bachelor of Science in Technology and Livelihood Education",
    value: "8",
  },
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "red" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Program" : "Please select your program"}
        searchPlaceholder="Search"
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    padding: 1,
    paddingHorizontal: 40,
    alignContent: "center",
    justifyContent: "center",
  },
  dropdown: {
    height: 60,
    borderColor: "#671111",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "red",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
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

/* import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

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
          { label: "Sub Category 1", value: "sub1" },
          { label: "Sub Category 2", value: "sub2" },
        ],
      },
    ],
  },
  { label: "Bachelor of Science in Psychology (BSP)", value: "7" },
  { label: "Bachelor of Science in Criminology (BSCRIM)", value: "7" },
  {
    label: "Bachelor of Science in Technology and Livelihood Education",
    value: "8",
  },
];

const DropdownComponent = () => {
  const [programValue, setProgramValue] = useState(null);
  const [subCategoryValue, setSubCategoryValue] = useState(null);

  return (
    <View style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Select Program"
        value={programValue}
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
          placeholder="Select Sub Category"
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

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  dropdown: {
    width: 300,
    marginBottom: 10,
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
});
 */
