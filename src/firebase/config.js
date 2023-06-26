import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBaZ2deytgt1UnzYjJgRAfh2Kk28zs-Xf8',
  authDomain: 'cooking-recipe-20d23.firebaseapp.com',
  projectId: 'cooking-recipe-20d23',
  storageBucket: 'cooking-recipe-20d23.appspot.com',
  messagingSenderId: '489571770555',
  appId: '1:489571770555:web:2c95d8cdd9f22e21bb899e',
};

//init firebase

firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
