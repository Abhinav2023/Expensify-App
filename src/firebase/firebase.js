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

 const database=firebase.database();

database.ref().set({
    name: 'Abhinav Bansal',
    age: 18,
    location:{
        city: 'Sawai Madhopur',
        country: 'India'
    }
}).then(()=>{
    console.log('data is saved');
}).catch((error)=>{
    console.log('This failed', error);
})
database.ref('age').set(27);
database.ref('location/city').set('Allahabad');

database.ref('attributes').set({
    height: 24,
    weight: 45
}).then(()=>{
    console.log('data is saved perfectly!');
}).catch((e)=>{
    console.log('Error expected', e);
})

console.log('I made a request to change to database');

