import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDLwUcVkw45LE3vKuDObzY4oR7xG5XUO9M",
    authDomain: "joaquingames-ab563.firebaseapp.com",
    projectId: "joaquingames-ab563",
    storageBucket: "joaquingames-ab563.appspot.com",
    messagingSenderId: "102424138149",
    appId: "1:102424138149:web:fb3919bfa7003edd76984c"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig);
