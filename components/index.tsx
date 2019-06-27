import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { ActivityIndicator, Button } from "react-native-paper";
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Auth } from "../helpers/Firebase";

import Overview from "./Overview";
import AppartmentOverview from "./Appartment";
import Login from "./Auth";

function Test(props: any) {
  return <View />;
}
const OverviewNavigator = createMaterialBottomTabNavigator(
  {
    Overview: { screen: Overview },
    Settings: { screen: Test }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => (
        <MaterialCommunityIcons name="account" size={30} color={tintColor} />
      )
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    },
    shifting: true,
    labeled: false
  }
);

const OverviewStack = createStackNavigator({
  Overview: {
    screen: OverviewNavigator,
    navigationOptions: ({ navigation }) => ({
      title: `Overview`,
      headerLeft: null,
      headerRight: (
        <Button
          onPress={async () => {
            try {
              await Auth.logout("commo64dor@gmail.com");
              navigation.navigate("AuthLoading");
            } catch (err) {
              console.error(err);
            }
          }}
        >
          Logout
        </Button>
      )
    })
  },
  Appartment: {
    screen: AppartmentOverview,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam("name", "TEST")
    })
  }
});

function AuthLoadingScreen(props: any) {
  useEffect(() => {
    Auth.isUserLoggedIn()
      .then(result => {
        let nextScreen = result ? "App" : "Auth";
        console.log("nextScreen: ", nextScreen);
        props.navigation.navigate(nextScreen);
      })
      .catch(err => console.error(err));
  });

  return <ActivityIndicator animating={true} />;
}

const AppStack = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: OverviewStack,
      Auth: Login
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
export { OverviewStack, Login, AppStack };
