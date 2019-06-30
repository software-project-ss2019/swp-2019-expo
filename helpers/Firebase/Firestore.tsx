import firebase from "./Firebase";
import "firebase/firestore";

const db = firebase.firestore();
export default class Firestore {
  static async flats() {
    // const userDoc = await Firestore.user("P3UCjk1Kw5O4FOBexmHzG22BDW32");

    // const flats = userDoc.map(user => user.flats)[0];
    // console.log(flats);
    // const snapshot = flats.map(async (flatUID: string ) => 
    //   (await db.doc(`flats/${flatUID.trim()}`).get()).data()
    // );
    // return snapshot;

    const snapshot = await db
      .collection("flats")
      .where("owner", "==", "P3UCjk1Kw5O4FOBexmHzG22BDW32")
      .get();
    return snapshot.docs.map(doc => doc.data());
  }

  static async user(uid: string) {
    const snapshot = await db
      .collection("users")
      .where("uid", "==", uid)
      .get();
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
