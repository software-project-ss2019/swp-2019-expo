import firebase from "./Firebase";
import "firebase/firestore";

const db = firebase.firestore();
export default class Firestore {
  static async flats() {
    const snapshot = await db.collection("flats").get();
    return snapshot.docs.map(doc => doc.data());
  }

  static async addFlat(flat: any) {
    try {
      return await db.collection("flats").add(flat);
    } catch (err) {
      console.error(err);
    }
  }
}
