import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Title } from "react-native-paper";
import FlatScroll from "./FlatScroll";
import { Firestore } from "../../helpers/Firebase";
import { app } from "firebase";
interface IProps {
  navigation: any;
}
export default function Overview(props: IProps) {
  const [appartments, setAppartments] = useState([]);
  useEffect(() => {
    try {
      Firestore.flats().then(appartmentsArr => {
        setAppartments(appartmentsArr);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);
  return (
    <SafeAreaView>
      <FlatScroll appartments={appartments} navigation={props.navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    fontSize: 30,
    padding: 16
  }
});
