import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { Title, Text } from "react-native-paper";

export default function AppartmentOverview(props: any) {
  const { address, location, name } = props.navigation.getParam("flat", {});
  const { city, country, street, zip } = address;
  return (
    <SafeAreaView>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        style={styles.item}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex"
  },
  item: {},
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
