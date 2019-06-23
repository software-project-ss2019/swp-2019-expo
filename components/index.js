import { createStackNavigator } from "react-navigation";

import Overview from "./Overview";
import AppartmentOverview from "./Appartment";
const OverviewStack = createStackNavigator({
  Home: {
    screen: Overview,
    navigationOptions: ({ navigation }) => ({
      title: `Overview`
    })
  },
  Appartment: {
    screen: AppartmentOverview,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam("name", "TEST")
    })
  }
});

export default OverviewStack;
