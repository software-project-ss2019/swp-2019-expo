import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Paragraph, Title } from "react-native-paper";
import { Firestore, Auth } from "../../helpers/Firebase";
import KeyDialog from "./KeyDialog";
interface IProps {
  flatID: string;
  locks: any;
}
export default function KeyCards(props: any) {
  const keyDialogRef = React.createRef();
  const [selectedCard, setSelectedCard] = useState();

  const onCardPress = (cardID: number) => {
    setSelectedCard(cardID);
    keyDialogRef.current.makeVisible();
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button
          mode="contained"
          style={styles.activeCard}
          onPress={() => onCardPress(0)}
        >
          <Text>{props.locks[0].data.name}</Text>
        </Button>
        <Button mode="contained" style={styles.activeCard}>
          <Text />
        </Button>
      </View>
      <View style={styles.row}>
        <Button mode="contained" style={styles.activeCard}>
          <Text />
        </Button>
        <Button style={styles.activeCard}>
          <Text />
        </Button>
      </View>
      <KeyDialog ref={keyDialogRef} lockID={props.locks[0].id} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%"
  },
  row: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    padding: 8
  },
  activeCard: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "50%",
    margin: 8
  },
  deactCard: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 8
  },
  map: {
    alignSelf: "stretch",
    height: 200
  },
  title: {
    alignSelf: "center",
    fontSize: 30,
    padding: 16
  },
  text: {
    flex: 1,
    alignSelf: "center",
    fontSize: 16,
    padding: 16
  }
});
