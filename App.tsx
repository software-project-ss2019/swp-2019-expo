import React from "react";
import { StyleSheet, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { Firestore } from "./helpers/Firebase/";

import { Login, OverviewStack, AppStack } from "./components";
import { store } from "./stores/appStore";
interface IState {
  isUserLoggedIn: boolean;
}

const AppContainer = createAppContainer(AppStack);
export default class App extends React.Component<IState, any> {
  
  setFullInfo = async () => {
    let flats, locks;
    try {
      flats = await Firestore.flats();
      store.dispatch({
        type: "SET_FLATS",
        flats
      });
      flats.forEach(async (flat: any) => {
        (await Firestore.locks(flat.id)).forEach(async (lock: any) =>
          store.dispatch({
            type: "SET_LOCKS",
            locks: store.getState().locks.concat([await lock])
          })
        );
      });
    } catch (err) {
      console.error(err);
    }
  };
  // getUsers = async () => {
  //   let flats;
  //   try {
  //     flats = await Firestore.locks();
  //   } catch (err) {
  //     console.error(err);
  //   }
  //   return flats;
  // };
  // getLocks = async () => {
  //   let flats;
  //   try {
  //     flats = store.getState().flats.;
  //   } catch (err) {
  //     console.error(err);
  //   }
  //   return flats;
  // };
  async componentDidMount() {
    this.setFullInfo();
  }
  render() {
    return (
      <Provider store={store}>
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
