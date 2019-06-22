import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import AppartmentList from "./AparmentList";

export default function MainMap(props) {
  return (
    <SafeAreaView>
      <Text theme={props.theme} style={styles.title}>
        Overview
      </Text>
      <AppartmentList
        flats={[
          { name: "Apartment 1" },
          { name: "Apartment 2" },
          { name: "Apartment 3" },
          { name: "Apartment 4" },
          { name: "Apartment 5" }
        ]}
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
