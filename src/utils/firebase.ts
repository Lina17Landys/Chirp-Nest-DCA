import { initializeApp } from "firebase/app";
import { doc, getFirestore } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

import { collection, addDoc } from "firebase/firestore"; 

export async function save() {
    try {
        const email = (document.getElementById("email") as HTMLInputElement)?.value;
        const password = (document.getElementById("pass1") as HTMLInputElement)?.value;

        if (email && password) {
            const docRef = await addDoc(collection(db, "users"), {
                email: email,
                password: password,
            });

            console.log("Document written with ID: ", docRef.id);
        } else {
            console.error("Email or password is null or undefined");
        }
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
save;