import React from "react";
import { StyleSheet, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { Provider as PaperProvider } from "react-native-paper";

import { Login, OverviewStack, AppStack } from "./components";
import { Auth } from "./helpers/Firebase";

interface IState {
  isUserLoggedIn: boolean;
}

const AppContainer = createAppContainer(AppStack);

class App extends React.Component<IState, any> {
  render() {
    return (
      <PaperProvider>
        <AppContainer />
      </PaperProvider>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
