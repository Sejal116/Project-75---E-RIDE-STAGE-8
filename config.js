import firebase from "firebase";
require("@firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6U50jocPYBd7ow-PftpFabKwEKr5uAFw",
  authDomain: "project-71---e-ride-stag-e9baa.firebaseapp.com",
  projectId: "project-71---e-ride-stag-e9baa",
  storageBucket: "project-71---e-ride-stag-e9baa.appspot.com",
  messagingSenderId: "787860617451",
  appId: "1:787860617451:web:933427fab239c56394e6ae"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
