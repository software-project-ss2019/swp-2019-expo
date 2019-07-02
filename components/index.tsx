import React, { useEffect } from "react";
import { ActivityIndicator, Button } from "react-native-paper";
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";

import { Auth } from "../helpers/Firebase";

import Overview from "./Overview";
import AppartmentOverview from "./Appartment";
import Login from "./Auth";

const OverviewStack = createStackNavigator({
  Overview: {
    screen: Overview,
    navigationOptions: ({ navigation }) => ({
      title: `Overview`,
      headerLeft: null,
      headerRight: (
        <Button
          onPress={async () => {
            try {
              await Auth.logout();
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
