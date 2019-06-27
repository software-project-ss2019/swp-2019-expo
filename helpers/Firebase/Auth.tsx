import firebase from "./Firebase";
import "firebase/firestore";

import { DeviceStorage } from "../DeviceStorage";

export default class Auth {
  // public
  static async validateAndLogin(email: string, password: string) {
    return await Auth.login(email.toLowerCase(), password);
  }

  static async logout(email: string) {
    const store = "login";
    try {
      return await DeviceStorage.removeData(store, "commo64dor@gmail.com");
    } catch (err) {
      console.error(err);
    }
  }

  static async validateAndRegister(email: string, password: string) {
    return await Auth.register(email.toLowerCase(), password);
  }

  static async isUserLoggedIn() {
    try {
      const accessToken = await DeviceStorage.retreiveData(
        "login",
        "commo64dor@gmail.com"
      );
      if (accessToken) return true;
      else return false;
    } catch (err) {
			console.error(err);
    }
    return false;
  }

  // private
  private static async login(email: string, password: string) {
    const store = "login";

    try {
      const loginObj = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      const accessToken = await loginObj.user!.getIdToken();
      if (accessToken)
        return await DeviceStorage.storeData(store, email, accessToken);
    } catch (err) {
      console.error(err);
    }
    return false;
  }

  private static async register(email: string, password: string) {
    const store = "login";

    try {
      const registerObj = await firebase
        .auth()
        .createUserWithEmailAndPassword(email.toLowerCase(), password);
      const accessToken = await registerObj.user!.getIdToken();
      if (accessToken)
        return await DeviceStorage.storeData(store, email, accessToken);
    } catch (err) {
      console.error(err);
    }
    return false;
  }
}
