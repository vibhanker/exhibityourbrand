import React from 'react';

const firebase = require("firebase").default;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcXHZJZ0puA9eId7ZLthmA7plkcFNErDQ",
  authDomain: "exhibityourbrand.firebaseapp.com",
  projectId: "exhibityourbrand",
  storageBucket: "exhibityourbrand.appspot.com",
  messagingSenderId: "780255019476",
  appId: "1:780255019476:web:46391de9293f6917ff1641",
  measurementId: "G-KV1LNG2166"
};

console.log(firebase);

const app = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

db.collection("users").add({
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});

export default function Firestore(){
    React.useEffect(()=>{
        console.log("vaibhav shanker");
        // console.log(app);
        // console.log(db);
    }, []);


    return (<div>VaibhavShanker</div>)
}