import { Firestore } from "../helpers/Firebase/";

export const SET_FLATS = "SET_FLATS";
export const SET_LOCKS = "SET_LOCKS";
export const SET_GUESTS = "SET_GUESTS";

export async function getFlats() {
  let flats;
  try {
    flats = await Firestore.flats();
  } catch (err) {
    console.error(err);
  }
  return {
    type: SET_FLATS,
    flats
  };
}
