import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ThemeProvider, useTheme } from "./ThemeContext"; // Import the ThemeProvider and useTheme hook

// Screen Imports
import SplashIntro from "./screens/SplashIntro";
import Login from "./screens/Login";
import Register_Student from "./screens/Register_Student";
import Register_Faculty from "./screens/Register_Faculty";
import Account from "./screens/Account";
import CardCatalog from "./screens/CardCatalog";
import Borrowed from "./screens/Borrowed";
import Reservation from "./screens/Reservation";
import Module from "./screens/Module";
import Settings from "./screens/Settings";
import Search from "./screens/Search";
import ComponentMaker from "./ComponentMaker";
import Tailwind from "./screens/Tailwind";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { isDarkMode } = useTheme(); // Access the dark mode state
  const dynamicTabBarStyle = isDarkMode
    ? darkStyles.tabBarStyle
    : styles.tabBarStyle;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: dynamicTabBarStyle,
        tabBarActiveTintColor: isDarkMode ? "#FFD700" : "#7D0707",
        tabBarInactiveTintColor: isDarkMode ? "#808080" : "#870F0F",
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Card Catalog Container"
        component={CardCatalog}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Borrowed"
        component={Borrowed}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "library" : "library-outline"}
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Reservation"
        component={Reservation}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "reader" : "reader-outline"}
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  // For the font to load globally
  const [fontsLoaded] = useFonts({
    "CreteRound-Regular": require("./assets/fonts/CreteRound-Regular.ttf"),
    "Figtree-VariableFont": require("./assets/fonts/Figtree-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#7D0707" />
      </View>
    );
  }

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash Intro">
          <Stack.Screen
            name="Splash Intro"
            component={SplashIntro}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Student Registration"
            component={Register_Student}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Faculty Registration"
            component={Register_Faculty}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Module"
            component={Module}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Card Catalog"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Reservation"
            component={Reservation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Account"
            component={Account}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Component Maker"
            component={ComponentMaker}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tailwind"
            component={Tailwind}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "#E8D0D0",
    height: hp(10),
    position: "absolute",
    borderTopWidth: 0,
    paddingTop: hp(3),
    paddingBottom: hp(2.5),
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    display: "flex",
    bottom: hp(3),
    right: wp(5),
    left: wp(5),
    borderRadius: 90,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

const darkStyles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "#333",
    height: hp(10),
    position: "absolute",
    borderTopWidth: 0,
    paddingTop: hp(3),
    paddingBottom: hp(2.5),
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    display: "flex",
    bottom: hp(3),
    right: wp(5),
    left: wp(5),
    borderRadius: 90,
  },
});
