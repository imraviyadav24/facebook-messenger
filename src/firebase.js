import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
   
        apiKey: "AIzaSyBY3GjFbSGLN-MDJwT_6tkgx6rJYpvuc-I",
        authDomain: "facebook-messenger-clone-ae4b1.firebaseapp.com",
        databaseURL: "https://facebook-messenger-clone-ae4b1.firebaseio.com",
        projectId: "facebook-messenger-clone-ae4b1",
        storageBucket: "facebook-messenger-clone-ae4b1.appspot.com",
        messagingSenderId: "35193018564",
        appId: "1:35193018564:web:3d67ffb37dbf6040001191",
        measurementId: "G-WM53EJGW7B"
    
});

const db = firebaseApp.firestore();

export default db;
