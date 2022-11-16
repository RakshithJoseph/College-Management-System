import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBUsDsOIWCLv3pYWS8Qsv4ulKjWw-2lEWU",
  authDomain: "college-management-syste-2f0c7.firebaseapp.com",
  projectId: "college-management-syste-2f0c7",
  storageBucket: "college-management-syste-2f0c7.appspot.com",
  messagingSenderId: "259580390865",
  appId: "1:259580390865:web:627830233a64e0eab444f0",
  measurementId: "G-GWF1J86VRJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export{app};
export { db };

