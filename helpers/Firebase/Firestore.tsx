import firebase from "./Firebase";
import "firebase/firestore";

const db = firebase.firestore();
export default class Firestore {
  static async flats() {
    const snapshot = await db.collection("flats").get();
    return snapshot.docs.map(doc => doc.data());
  }
}
