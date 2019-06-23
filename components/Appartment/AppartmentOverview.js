import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Title } from "react-native-paper";

export default function AppartmentOverview(props) {
  const { name } = props
  return (
    <SafeAreaView>
      <Title style={styles.title}>{props.navigation.getParam("name","TEST")}</Title>
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
