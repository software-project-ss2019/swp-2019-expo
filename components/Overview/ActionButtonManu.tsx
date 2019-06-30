import React, { useState } from "react";
import { FAB, Portal, Provider } from "react-native-paper";
import { StyleSheet, View } from "react-native";

export default function ActionButtonManu(props: any) {
  const [openState, setOpenState] = useState(false);

  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={openState}
          icon={"settings"}
          actions={props.actions}
          onStateChange={({ open }) => setOpenState(open)}
          onPress={() => {
            if (openState) {
              // do something if the speed dial is open
            }
          }}
          style={styles.fab}
        />
      </Portal>
    </Provider>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 8,
    right: 0,
    bottom: 0
  }
});
