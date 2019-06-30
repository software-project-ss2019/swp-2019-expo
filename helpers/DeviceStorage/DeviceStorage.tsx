import react, { useState } from "react";
import { AsyncStorage } from "react-native";
interface AsyncStorageModel {
  store: string;
  key: string;
  value: string;
}
export default class DeviceStorage {
  static async storeData(store: string, key: string, value: string) {
    try {
      return await AsyncStorage.setItem(`${store}:${key}`, value);
    } catch (err) {
      console.error(err);
    }
  }

  static async retreiveData(store: string, key: string) {
    try {
      return await AsyncStorage.getItem(`${store}:${key}`);
    } catch (err) {
      console.error(err);
    }
  }

  static async removeData(store: string, key: string) {
    try {
      return await AsyncStorage.multiRemove([`${store}:${key}`]);
    } catch (err) {
      console.error(err);
    }
  }
}
