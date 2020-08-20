import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBQPmUQ_JS--Tp_oR4_f76AkpgcLEvpgzM",
  authDomain: "gomi-web.firebaseapp.com",
  databaseURL: "https://gomi-web.firebaseio.com",
  projectId: "gomi-web",
  storageBucket: "gomi-web.appspot.com",
  messagingSenderId: "16210871940",
  appId: "1:16210871940:web:1f2b78ac975fa7b4a4e4d1",
  measurementId: "G-TSV1825SYZ",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export default auth;
