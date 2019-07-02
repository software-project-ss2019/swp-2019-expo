import React from "react";
import { View } from "react-native";
import { Firestore, Auth } from "../helpers/Firebase";

let { Provider } = React.createContext({
  flats: [],
  locks: [],
  users: []
});

export default class AppProvider extends React.Component<any, any> {
  state = {
    flats: [],
    locks: [],
    users: []
  };

  getFlats = async () => {
    try {
      const flats = Firestore.flats();
      this.setState({ flats });
    } catch (err) {
      console.error(err);
    }
  };

  componentDidMount() {}

  render() {
    return <Provider state={this.state}>{this.props.childern}</Provider>;
  }
}
