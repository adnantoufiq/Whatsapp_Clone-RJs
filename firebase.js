import * as firebase from 'firebase';

import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDcH89bmk9mgjf1NcCK3jdAF3bnVZatcHg",
    authDomain: "whatsapp-clone-9c49c.firebaseapp.com",
    projectId: "whatsapp-clone-9c49c",
    storageBucket: "whatsapp-clone-9c49c.appspot.com",
    messagingSenderId: "1060579867397",
    appId: "1:1060579867397:web:b18290eb706cf646d0956c",
    measurementId: "G-X034MBYMWV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{auth, provider};

  export default db;