import * as firebase from "firebase";
import "firebase/firestore";

import serviceAccount from "../../swp-2019.key.json";

firebase.initializeApp(serviceAccount);
const db = firebase.firestore();

class Firebase {
  static async flats() {
    const snapshot = await db.collection("flats").get();
    return snapshot.docs.map(doc => doc.data());
  }
}
export default Firebase;
