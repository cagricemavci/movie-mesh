import firebase from 'firebase';
import firebaseConfig from '../config/firebaseConfig'
import 'firebase/firestore'

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()
export const db = firebase.firestore()
export default firebase