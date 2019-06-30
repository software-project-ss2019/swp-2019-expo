import React from "react";
import { ScrollView } from "react-native";
import {
  Button,
  Dialog,
  Paragraph,
  Portal,
  TextInput
} from "react-native-paper";
import { Firestore } from "../../helpers/Firebase";
import { any } from "prop-types";
interface IProps {
  ref: any;
  navigation: any;
}
interface IState {
  visible: boolean;
  name: string;
  street: string;
  zip: string;
  city: string;
  country: string;
}
export default class FlatAddDialog extends React.Component<IProps, IState> {
  state = {
    visible: false,
    name: "",
    street: "",
    zip: "",
    city: "",
    country: ""
  };

  makeVisible = () => this.setState({ visible: true });

  registerFlat = async () => {
    const { name, street, zip, city, country } = this.state;
    const flat = {
      name,
      address: {
        street,
        zip,
        city,
        country
      },
      lock: null
    };

    try {
      const result = await Firestore.addFlat(flat);
      if (result!.id) this.props.navigation.navigate("AuthLoading");
      else console.log("failed");
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <Portal>
        <Dialog
          visible={this.state.visible}
          onDismiss={() => this.setState({ visible: false })}
        >
          <Dialog.Title>Register a new flat</Dialog.Title>
          <Dialog.Content>
            <ScrollView>
              {["name", "street", "zip", "city", "country"].map(item => (
                <TextInput
                  key={item}
                  mode="outlined"
                  label={item}
                  value={this.state[item]}
                  onChangeText={text => {
                    let newState = {};
                    newState[item] = text;
                    this.setState(newState);
                  }}
                />
              ))}
            </ScrollView>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={this.registerFlat}>Save</Button>
            <Button onPress={() => this.setState({ visible: false })}>
              Cancel
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    );
  }
}
