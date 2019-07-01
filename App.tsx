import React from "react";
import { StyleSheet, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { Provider as PaperProvider } from "react-native-paper";
import appStore from "./store/appStore";
import { Login, OverviewStack, AppStack } from "./components";
import { Auth } from "./helpers/Firebase";

const { Provider } = React.createContext(appStore.getState());

interface IState {
  isUserLoggedIn: boolean;
}

const AppContainer = createAppContainer(AppStack);

export default class App extends React.Component<IState, any> {
  render() {
    return (
      <Provider store={appStore}>
        <PaperProvider>
          <AppContainer />
        </PaperProvider>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
