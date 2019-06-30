import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Button, Dialog, Paragraph, Portal } from "react-native-paper";
import ActionButtonManu from "./ActionButtonManu";
import FlatScroll from "./FlatScroll";
import { Firestore, Auth } from "../../helpers/Firebase";
import FlatAddDialog from "./FlatAddDialog";
interface IProps {
  navigation: any;
}
export default function Overview(props: IProps) {
  const [flats, setFlats] = useState([]);
  const flatAddDialogRef = React.createRef();

  useEffect(() => {
    Firestore.flats()
      .then(flatsArr => setFlats(flatsArr))
      .catch(err => console.error(err));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatScroll flats={flats} navigation={props.navigation} />
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%"
  },
  item: {},
  title: {
    alignSelf: "center",
    fontSize: 30,
    padding: 16
  }
});
