import firebase from "./Firebase";
import "firebase/firestore";

const db = firebase.firestore();
export default class Firestore {
  static async flats() {
    const snapshot = await db
      .collection("flats")
      .where("owner", "==", "P3UCjk1Kw5O4FOBexmHzG22BDW32")
      .get();
    return snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }));
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

  static async locks(uid: string) {
    const snapshot = await db
      .collection("locks")
      .where("flatID", "==", uid)
      .get();
    return snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }));
  }

  static async openLock(uid: string) {
    db.collection("locks")
      .doc(uid)
      .update({ isOpen: true });
  }
}
