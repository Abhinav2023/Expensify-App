import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAhCeLEt_BXfk48TnuNHYQLt7YYMaxbuA0",
    authDomain: "expensify-89e01.firebaseapp.com",
    databaseURL: "https://expensify-89e01.firebaseio.com",
    projectId: "expensify-89e01",
    storageBucket: "expensify-89e01.appspot.com",
    messagingSenderId: "997606924053",
    appId: "1:997606924053:web:24227e0b6ea4e64021d31c",
    measurementId: "G-J6M2KXMDSQ"
};

firebase.initializeApp(firebaseConfig);
 // firebase.analytics();

firebase.database().ref().set({
    name: 'Abhinav Bansal',
    
});