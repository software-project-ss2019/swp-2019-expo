import firebase from "./Firebase";
import "firebase/firestore";

const db = firebase.firestore();
export default class Firestore {
  static async flats() {
    const snapshot = await db.collection("flats").get();
    return snapshot.docs.map(doc => doc.data());
  }

  static async addFlat() {
    const flat = {
      address: {
        city: "Essen",
        country: "Germany",
        street: "Straße 3",
        zip: "30000"
      },
      location: {
        Latitude: 51.461502,
        Longitude: 7.014707
      },
      name: "Third Flat",
      locks: null
    };
    try {
      const ref = await db.collection("flats").add(flat);
      console.log('Added document with ID: ', ref.id);
    } catch (err) {
      console.error(err);
    }
  }
}
