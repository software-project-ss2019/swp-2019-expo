import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Title, Text } from "react-native-paper";

export default function AppartmentOverview(props) {
  const { address, location, name } = props.navigation.getParam("flat", {});
  const { city, country, street, zip } = address;
  return (
    <SafeAreaView>
      <Text style={styles.text}>
        Address: {street}, {zip} {city}, {country}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    fontSize: 30,
    padding: 16
  },
  text: {
    alignSelf: "center",
    fontSize: 16,
    padding: 16
  }
});
