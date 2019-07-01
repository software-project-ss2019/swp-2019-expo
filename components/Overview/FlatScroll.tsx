import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import {
  Avatar,
  Button,
  Card,
  List,
  Paragraph,
  Title
} from "react-native-paper";

interface IProps {
  flats: any;
  navigation: any;
}
export default function FlatScroll(props: IProps) {
  // init
  const [expanded, setExpanded] = useState(
    props.flats.reduce((accu: any, _current: any, index: number) => {
      accu[index] = false;
      return accu;
    }, {})
  );

  const handlePress = (index: number) => {
    console.log("press")
    props.navigation.navigate("Appartment", { flat: props.flats[index] });
  };
  return (
    <FlatList
      data={props.flats}
      keyExtractor={(_item, index) => `flat-card-${index}`}
      renderItem={({ item, index }) => (
        <Card onPress={() => handlePress(index)} style={styles.card}>
          <Card.Content>
            <Title>{item.name}</Title>
            <Paragraph>{item.address.city}</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: "https://t-ec.bstatic.com/images/hotel/max1024x768/156/15667677.jpg" }} />
        </Card>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 8
  }
});
