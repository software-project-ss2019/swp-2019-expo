import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Title, TextInput, Button } from "react-native-paper";
import { Firestore, Auth } from "../../helpers/Firebase";
import { DeviceStorage } from "../../helpers/DeviceStorage";
interface IProps {
  navigation: any;
}

export default function Login(props: IProps) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Title style={styles.title}>Login</Title>
      <View style={styles.item}>
        <TextInput
          mode="outlined"
          label="Email"
          placeholder="musterman@gmail.com"
          value={username}
          onChangeText={text => setUsername(text)}
          style={styles.text}
        />
      </View>
      <View style={styles.item}>
        <TextInput
          mode="outlined"
          label="Password"
          placeholder="6g!fjsd"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.text}
        />
      </View>
      <View style={styles.item}>
        <Button
          mode="contained"
          onPress={async () => {
            try {
              await Auth.validateAndLogin(username, password);

              props.navigation.navigate("AuthLoading");
            } catch (err) {
              console.error(err);
            }
          }}
        >
          Login
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  item: {
    padding: 16,
    alignSelf: "center"
  },
  text: {
    height: 60,
    width: 200
  },
  title: {
    fontSize: 50,
    alignSelf: "center",
    paddingTop: 32
  },
  button: {
    width: "50%"
  }
});
