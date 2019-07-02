import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { Title, Text } from "react-native-paper";

import { connect } from "react-redux";
import { Firestore, Auth } from "../../helpers/Firebase";

import KeyCards from "./KeyCards";
import ActionButtonManu from "../Common/ActionButtonManu";
import FlatAddDialog from "../Common/FlatAddDialog";
function AppartmentOverview(props: any) {
  const flat = props.navigation.getParam("flat", {});
  const { address, location } = flat.data;
  const { id } = flat;
  const { city, country, street, zip } = address;
  const flatAddDialogRef = React.createRef();

  const [locks, setLocks] = useState([
    {
      data: {
        autoCloseTimer: 0,
        flatID: "",
        isOpen: false,
        isPhysicallyOpen: false,
        name: ""
      },
      id: ""
    }
  ]);
  useEffect(() => {
    Firestore.locks(id)
      .then(locksArr => {
        console.log(locksArr);
        setLocks(locksArr);
      })
      .catch(err => console.error(err));
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.textBox}>
          <Text style={styles.label}>Street</Text>
          <Text style={styles.text}>Street: {street}</Text>
          <Text style={styles.label}>City</Text>
          <Text style={styles.text}>{city}</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.label}>Country</Text>
          <Text style={styles.text}>{country}</Text>
          <Text style={styles.label}>Zip</Text>
          <Text style={styles.text}>Zip: {zip}</Text>
        </View>
      </View>
      <View style={styles.item}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
      </View>
      <View style={styles.item}>
        <KeyCards locks={props.locks} />
      </View>
      <FlatAddDialog ref={flatAddDialogRef} navigation={props.navigation} />
      <ActionButtonManu
        actions={[
          {
            icon: "add",
            label: "Add a Flat",
            onPress: () => flatAddDialogRef.current.makeVisible()
          },
          {
            icon: "account-box",
            label: "Logout",
            onPress: () => Auth.logout()
          }
        ]}
      />
    </View>
  );
}
const mapStateToProps = (state: any) => ({ locks: state.locks });

export default connect(mapStateToProps)(AppartmentOverview);
const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%"
  },
  item: {
    flex: 3,
    padding: 16
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
  textContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    fontSize: 16,
    padding: 16,
    height: "100%",
    justifyContent: "space-evenly"
  },
  textBox: {
    flex: 1
  },
  text: {
    fontSize: 12,
    padding: 4
  },
  label: {
    opacity: 0.4,
    fontSize: 10,
    padding: 4
  }
});
