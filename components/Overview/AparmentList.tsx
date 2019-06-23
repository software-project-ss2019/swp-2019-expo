import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { List } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import { NavigationActions } from "react-navigation";
interface IProps {
  flats: any;
  navigation: any;
}
export default function AppartmentList(props: IProps) {
  let flats = [{}];

  // init
  (function() {
    flats = props.flats.map((item: any, index: number) => (
      <List.Item
        key={`flat-${index}`}
        title={item.name}
        left={props => <List.Icon {...props} icon="home" />}
        expanded={expanded}
        onPress={() => handlePress(index)}
      />
    ));
  })();

  const [expanded, setExpanded] = useState(
    flats.reduce((accu: any, _current: any, index: number) => {
      accu[index] = false;
      return accu;
    }, {})
  );

  const handlePress = (index: number) => {
    props.navigation.navigate("Appartment", { flat: props.flats[index] });
  };
  return <List.Section>{flats}</List.Section>;
}

const styles = StyleSheet.create({});
