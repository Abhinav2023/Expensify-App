import {firebase,googelAuthProvider} from '../firebase/firebase'

export const startLogin=()=>{
    return ()=>{
        return firebase.auth().signInWithPopup(googelAuthProvider);
    }
}
export const startLogout=()=>{
    return()=>{
        return firebase.auth().signOut();
    }
}