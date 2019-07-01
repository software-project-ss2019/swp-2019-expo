import React, { useState } from "react";
import { Alert, SafeAreaView, StyleSheet, View, Button } from "react-native";
import MapView from "react-native-maps";
import { Card, Title, Text, Paragraph } from "react-native-paper";
import { Firestore } from "../../helpers/Firebase";

export default function AppartmentOverview(props: any) {
  const { address, location, name } = props.navigation.getParam("flat", {});
  const { city, country, street, zip } = address;
  let textValue = "Unlock now"

  return (
    <SafeAreaView>
      <Card style={styles.card}>
          <Card.Content>
            <Title>{name}</Title>
            <Paragraph>Booked from 01.07.2019 - 07.07.2019</Paragraph>
          </Card.Content>
          <Card.Cover style={styles.card} source={{ uri: "https://t-ec.bstatic.com/images/hotel/max1024x768/156/15667677.jpg" }} />
          <Card.Content>
            <Paragraph>
              Address:{"\n"}
              {street}{"\n"}
              {zip}, {city}{"\n"}
              {country}
            </Paragraph>
            <Paragraph>
              You can access this flat from:{"\n"}
              01.07.2019 - 07.07.2019
            </Paragraph>
            <Button
              onPress={async () => {
                try {
                  await Firestore.unlock('FcIL855wk4lTqLR5whUY');

                  const success = await Firestore.getLock('FcIL855wk4lTqLR5whUY')

                  if (success && success.isPhysicallyOpen) Alert.alert('Door is unlocked for 15 Secondes')
                  else Alert.alert('Door lock didnt respond')

                  textValue = "Unlocked for 15 Seconds";
                } catch (err) {
                  console.error(err);
                }
              }}
              title={textValue}
              color="#841584"
              type="solid"
              accessibilityLabel=""
            />
          </Card.Content>
        </Card>
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
  },
  card: {
    padding: 8
  }
});
