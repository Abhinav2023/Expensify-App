import {firebase,googelAuthProvider} from '../firebase/firebase'

export const startLogin=()=>{
    return ()=>{
        return firebase.auth().signInWithPopup(googelAuthProvider);
    }
}