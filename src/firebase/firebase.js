import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);
 // firebase.analytics();
const database=firebase.database();
const googelAuthProvider=new firebase.auth.GoogleAuthProvider();

export {firebase , googelAuthProvider,database as default };

// database.ref('expenses').push({
//     id: '1',
//     description: "gum",
//     note: '',
//     amount: 195,
//     createdAt: 0
// });

// database.ref('expenses').on('child_removed',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_changed',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot)=>{
//         const expenses=[];
//         snapshot.forEach((childSnapshot)=>{
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses);
//     });

// database.ref('expenses')
//     .on('value',(snapshot)=>{
//         const expenses=[];
//         snapshot.forEach((childSnapshot)=>{
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses);
//     });

// setTimeout(()=>{
//     database.ref('expenses').push({
//         id: '1',
//         description: "Rent",
//         note: '',
//         amount: 19500,
//         createdAt: 0
//     });
// },4000);




// const firebaseNotes={
//     notes: {
//         nnjnonl: {
//             title: 'First note',
//             des: 'This is my first description of note'
//         },
//         nwoniojwoi: {
//             title: 'Second note',
//             des: 'This is my first description of note'
//         }
//     }
// };

// database.ref().set(firebaseNotes);

// database.ref('notes').set(
//     [
//         {
//             title: 'First note',
//             des: 'This is my first description of note'
//         },
//         {
//             title: 'Second note',
//             des: 'This is my first description of note'
//         }
//     ]
// );

// database.ref().on('value',(snapshot)=>{
//     console.log(snapshot.val());
// });

// setTimeout(()=>{
//     database.ref().update({
//         Stresslevel: 0,
//         'job/company': 'Microsoft'
//     })
// },4000);
 


// database.ref().set({
//     name: 'Abhinav Bansal',
//     age: 18,
//     Stresslevel: 6,
//     job: {
//         title: 'software developer',
//         company: 'Google'
//     },
//     location:{
//         city: 'Sawai Madhopur',
//         country: 'India'
//     }
// }).then(()=>{
//     console.log('data is saved');
// }).catch((error)=>{
//     console.log('This failed', error);
// });

// database.ref().update({
//     name: 'Abhinav',
//     'location/city': 'Banglore',
//     'job/company': 'Amazon',
//     Stresslevel: 8
// }).then(()=>{
//     console.log('Database updated')
// }).catch((e)=>{
//     console.log('error'+ e);
// });