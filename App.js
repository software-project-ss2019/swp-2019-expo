import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainMap from "./components/map/MainMap";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

const MainNavigator = createBottomTabNavigator(
  {
    Home: { screen: MainMap },
    Map: { screen: MainMap }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
        } else if (routeName === "Settings") {
          iconName = `ios-options`;
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={30} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

const App = createAppContainer(MainNavigator);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
