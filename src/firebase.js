// import * as firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
// import "firebase/database";
import { getFirestore} from 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyCi2CWHI2klo5eboXKicAg70EBiIdQ4ulA",
    authDomain: "tasksboard-92e2c.firebaseapp.com",
    projectId: "tasksboard-92e2c",
    storageBucket: "tasksboard-92e2c.appspot.com",
    messagingSenderId: "881568346486",
    appId: "1:881568346486:web:9eb6adf90219746de64a57"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);