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
  appartments: any;
  navigation: any;
}
export default function FlatScroll(props: IProps) {
  // init
  const [expanded, setExpanded] = useState(
    props.appartments.reduce((accu: any, _current: any, index: number) => {
      accu[index] = false;
      return accu;
    }, {})
  );

  const handlePress = (index: number) => {
    props.navigation.navigate("Appartment", { flat: props.appartments[index] });
  };
  return (
    <FlatList
      data={props.appartments}
      keyExtractor={(_item, index) => `flat-card-${index}`}
      renderItem={({ item, index }) => (
        <Card onPress={() => handlePress(index)} style={styles.card}>
          <Card.Content>
            <Title>{item.name}</Title>
            <Paragraph>{item.address.city}</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
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
