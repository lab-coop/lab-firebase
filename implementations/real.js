// @flow
import firebase from 'firebase'

export default () => {
  var config = {
    apiKey: "AIzaSyACuaKaS-brQfOIEv8s70pR53RUtyg1GGE",
    authDomain: "lab-firebase-63f48.firebaseapp.com",
    databaseURL: "https://lab-firebase-63f48.firebaseio.com",
    storageBucket: "lab-firebase-63f48.appspot.com",
    messagingSenderId: "558402955210"
  };
  firebase.initializeApp(config);
  return firebase
}
