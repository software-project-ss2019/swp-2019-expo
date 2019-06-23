import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { List } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";

export default function AppartmentList(props) {
  let flats;

  // init
  (function() {
    flats = props.flats.map((item, index) => (
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
    flats.reduce((accu, _current, index) => {
      accu[index] = false;
      return accu;
    }, {})
  );

  const handlePress = index => {
    props.navigation.navigate("Appartment", { name: `Appartment ${index}` });
  };
  return <List.Section>{flats}</List.Section>;
}

const styles = StyleSheet.create({});
