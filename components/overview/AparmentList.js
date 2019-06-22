import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { List } from "react-native-paper";

export default function AppartmentList(props) {
  let flats;

  // init
  (function() {
    flats = props.flats.map((item, index) => (
      <List.Accordion
        key={`flat-${index}`}
        title={item.name}
        left={props => <List.Icon {...props} icon="home" />}
        expanded={expanded}
        onPress={() => handlePress(index)}
      >
        <List.Item title="Room 1" />
        <List.Item title="Room 2" />
      </List.Accordion>
    ));
  })();

  const [expanded, setExpanded] = useState(
    flats.reduce((accu, curr, index) => {
      accu[index] = false;
      return accu;
    }, {})
  );

  const handlePress = item => {
    let obj = {};
    obj[item] = !expanded[item];
    setExpanded({ ...expanded, obj });
  };
  return <List.Section>{flats}</List.Section>;
}

const styles = StyleSheet.create({});
