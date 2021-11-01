// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAfymwMCJbyOWJ-dEbpAgW8Howpe5XhUkI",
	authDomain: "jobtok-3f057.firebaseapp.com",
	projectId: "jobtok-3f057",
	storageBucket: "jobtok-3f057.appspot.com",
	messagingSenderId: "191839420102",
	appId: "1:191839420102:web:6643ad86a24fd5dc4c21c7",
	measurementId: "G-9XD7RVKQF2",
};


// Initialize Firebase

let app;
if (firebase.apps.length === 0 ) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const auth = firebase.auth();
const database = app.firestore();

export { auth, database }