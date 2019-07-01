import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import {
  Button,
  Dialog,
  Paragraph,
  Portal,
  Switch,
  TextInput
} from "react-native-paper";
import { Firestore } from "../../helpers/Firebase";
import { any } from "prop-types";
interface IProps {
  ref: any;
  navigation: any;
  lockID: string;
}
interface IState {
  visible: boolean;
  isLocked: boolean;
  isDeactiviated: boolean;
}
export default class KeyDialog extends React.Component<IProps, IState> {
  state = {
    visible: false,
    isLocked: false,
    isDeactiviated: false
  };

  makeVisible = () => this.setState({ visible: true });

  openLock = () => Firestore.openLock(this.props.lockID)
  render() {
    return (
      <Portal>
        <Dialog
          visible={this.state.visible}
          onDismiss={() => this.setState({ visible: false })}
        >
          <Dialog.Title>Lock Control</Dialog.Title>
          <Dialog.Content>
            <Text>Open Lock:</Text>
            <Switch
              value={this.state.isLocked}
              onValueChange={() => {
                this.setState({ isLocked: !this.state.isLocked }, this.openLock);
              }}
              style={{ padding: 8 }}
            />
            <Text>Deactivate Lock:</Text>

            <Switch
              value={this.state.isDeactiviated}
              onValueChange={() => {
                this.setState({ isDeactiviated: !this.state.isDeactiviated });
              }}
              style={{ padding: 8 }}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => this.setState({ visible: false })}>
              Cancel
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    );
  }
}
