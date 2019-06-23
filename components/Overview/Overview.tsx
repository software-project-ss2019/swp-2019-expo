import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Title } from "react-native-paper";
import AppartmentList from "./AparmentList";
import Firebase from "../../helpers/Firebase/Firebase";
interface IProps {
  navigation: any;
}
export default function Overview(props: IProps) {
  const [appartments, setAppartments] = useState([{}]);
  useEffect(() => {
    try {
      Firebase.flats().then(flats => {
        console.log(appartments);
        setAppartments(flats);
      });
    } catch (err) {
      console.error(err);
    }
  },[]);
  // console.log(appartments);
  return (
    <SafeAreaView>
      <AppartmentList flats={appartments} navigation={props.navigation} />
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
