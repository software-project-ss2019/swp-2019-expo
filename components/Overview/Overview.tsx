import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { connect } from "react-redux";
import ActionButtonManu from "../Common/ActionButtonManu";
import AppProvider from "../../stores/AppProvider";
import FlatScroll from "./FlatScroll";
import { Firestore, Auth } from "../../helpers/Firebase";
import FlatAddDialog from "../Common/FlatAddDialog";
interface IProps {
  flats: any;
  navigation: any;
}

function Overview(props: IProps) {
  const flatAddDialogRef = React.createRef();

  return (
    <SafeAreaView style={styles.container}>
      <FlatScroll flats={props.flats} navigation={props.navigation} />

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
const mapStateToProps = (state: any) => ({ flats: state.flats, locks: state.locks });

export default connect(mapStateToProps)(Overview);

export const styles = StyleSheet.create({
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
