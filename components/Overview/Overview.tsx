import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { FAB } from "../Common";
import FlatScroll from "./FlatScroll";
import { Firestore } from "../../helpers/Firebase";
import { app } from "firebase";

interface IProps {
  navigation: any;
}
export default function Overview(props: IProps) {
  const [flats, setFlats] = useState([]);
  useEffect(() => {
    Firestore.flats()
      .then(flatsArr => {
        setFlats(flatsArr);
      })
      .catch(err => console.error(err));
  }, []);
  return (
    <SafeAreaView>
      <FlatScroll appartments={flats} navigation={props.navigation} />
      <FAB
        actions={[{ icon: "add", onPress: () => {
          try {
          Firestore.addFlat()
          props.navigation.navigate("AuthLoading")
          } catch(err) {
            console.error(err);
          }
        } }]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    fontSize: 30,
    padding: 16
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0
  }
});
