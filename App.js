import * as React from "react";
import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// Screen Imports
import SplashIntro from "./screens/SplashIntro";
import Login from "./screens/Login";
import Register_Student from "./screens/Register_Student";
import Register_Faculty from "./screens/Register_Faculty";
import CardCatalog from "./screens/CardCatalog";
import Borrowed from "./screens/Borrowed";
import Reservation from "./screens/Reservatiion";
import Module from "./screens/Module";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: styles.tabBarStyle,
      tabBarActiveTintColor: "#7D0707", // Change active tab color to blue
      tabBarInactiveTintColor: "#870F0F", // Inactive Tab Color
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
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashIntro">
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "#E8D0D0",
    height: hp(10),
    position: "absolute",
    bottom: hp(0),
    borderTopWidth: 0,
    paddingTop: hp(3),
    paddingBottom: hp(2.5),
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    display: "flex",
    bottom: hp(2),
    right: wp(5),
    left: wp(5),
    borderRadius: 90,
  },
});
