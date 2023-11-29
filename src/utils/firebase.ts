import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

import { collection, addDoc } from "firebase/firestore"; 

//try {
 // const docRef = await addDoc(collection(db, "users"), {
 //   email: "Ada",
 //   password: "Lovelace",
 // });
//  console.log("Document written with ID: ", docRef.id);
//} catch (e) {
//  console.error("Error adding document: ", e);
//}