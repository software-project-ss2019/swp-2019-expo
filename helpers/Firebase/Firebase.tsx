import * as firebase from "firebase";
import serviceAccount from "../../swp-2019.key.json";

export default (!firebase.apps.length
  ? firebase.initializeApp(serviceAccount)
  : firebase.app());
