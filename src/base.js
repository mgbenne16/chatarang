import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import Rebase from 're-base'


const config = {
        apiKey: "AIzaSyC9iudOZQKeFd40X1ri9PHctxzR4bBtyvM",
        authDomain: "chatarangs2morning.firebaseapp.com",
        databaseURL: "https://chatarangs2morning.firebaseio.com",
        projectId: "chatarangs2morning",
        storageBucket: "chatarangs2morning.appspot.com",
        messagingSenderId: "242072473029"
}

const app = firebase.initializeApp(config)

export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()

const db = app.database()

export default Rebase.createClass(db)