import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Title } from "react-native-paper";
import AppartmentList from "./AparmentList";

export default function Overview(props) {
  return (
    <SafeAreaView>
      <AppartmentList
        flats={[
          { name: "Appartment 1" },
          { name: "Appartment 2" },
          { name: "Appartment 3" },
          { name: "Appartment 4" },
          { name: "Appartment 5" }
        ]}

        navigation={props.navigation}
      />
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
