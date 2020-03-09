import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
	apiKey: "AIzaSyCqsqFm4oSySmQ3mc2VhAeNmpKjvDJoF8s",
	authDomain: "todoist-d2e16.firebaseapp.com",
	databaseURL: "https://todoist-d2e16.firebaseio.com",
	projectId: "todoist-d2e16",
	storageBucket: "todoist-d2e16.appspot.com",
	messagingSenderId: "490095858650",
	appId: "1:490095858650:web:5b0283c641ab2b5be666e3"
})

export { firebaseConfig as firebase }