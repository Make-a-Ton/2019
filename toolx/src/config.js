import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBOJ7SucdS_v28p_mjmHcg7RFE7btZAc7k",
    authDomain: "peace-nuflyh.firebaseapp.com",
    databaseURL: "https://peace-nuflyh.firebaseio.com",
    projectId: "peace-nuflyh",
    storageBucket: "peace-nuflyh.appspot.com",
    messagingSenderId: "1076763594616",
    appId: "1:1076763594616:web:7ce946425220b1945dc28d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.database();
