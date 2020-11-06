import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCYcMWHfNbCNYewPkMap4_B_LNrcILAQtQ",
    authDomain: "facebook-clone-19fe4.firebaseapp.com",
    databaseURL: "https://facebook-clone-19fe4.firebaseio.com",
    projectId: "facebook-clone-19fe4",
    storageBucket: "facebook-clone-19fe4.appspot.com",
    messagingSenderId: "54844620168",
    appId: "1:54844620168:web:bb537310243b0b66be4e3d",
    measurementId: "G-ZFDC44H98B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;