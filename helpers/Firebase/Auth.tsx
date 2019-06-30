import firebase from "./Firebase";
import "firebase/firestore";

import { DeviceStorage } from "../DeviceStorage";
const store = "@login";
const key = "userCredential";
export default class Auth {
  // public
  static async validateAndLogin(email: string, password: string) {
    return await Auth.login(email.toLowerCase(), password);
  }

  static async logout() {
    try {
      return await DeviceStorage.removeData(store, key);
    } catch (err) {
      console.error(err);
    }
  }

  // static async validateAndRegister(email: string, password: string) {
  //   return await Auth.register(email.toLowerCase(), password);
  // }

  static async isUserLoggedIn() {
    try {
      const userCredentialStorage = await DeviceStorage.retreiveData(
        store,
        key
      );
      if (userCredentialStorage) {
        const userCredentialJsonStorage = JSON.parse(userCredentialStorage!);
        if (userCredentialJsonStorage.stsTokenManager.accessToken) {
          return true;
        } else {
          return false;
        }
      }
    } catch (err) {
      console.error(err);
    }
    return false;
  }

  // private
  private static async login(email: string, password: string) {
    try {
      // fetch login information from firebase
      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      // if no error
      if (userCredential) {
        // get user informaion and transform to json
        const userCredentialJson = await userCredential.user!.toJSON();
        console.log(userCredentialJson);
        // store in device storage
        return await DeviceStorage.storeData(
          store,
          key,
          JSON.stringify(userCredentialJson)
        );
      }
    } catch (err) {
      console.error(err);
    }
    return false;
  }

  static async getCurrentUserID() {
    try {
      const userCredentialStorage = await DeviceStorage.retreiveData(
        store,
        key
      );
      if (userCredentialStorage) {
        const userCredentialJsonStorage = JSON.parse(userCredentialStorage!);
        return userCredentialJsonStorage.uid
      }
      else {
        throw new Error("User does not have permissions!")
      }
    } catch (err) {
      console.error(err);
    }
  }
  // private static async register(email: string, password: string) {
  //   try {
  //     const registerObj = await firebase
  //       .auth()
  //       .createUserWithEmailAndPassword(email.toLowerCase(), password);
  //     const accessToken = await registerObj.user!.getIdToken();
  //     if (accessToken)
  //       return await DeviceStorage.storeData(store, email, accessToken);
  //   } catch (err) {
  //     console.error(err);
  //   }
  //   return false;
  // }
}
