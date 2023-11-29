import { initializeApp } from "firebase/app";
import { doc, getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBrgG1rKgzmoe5u8K-zwu3_CZ256hX6mKA",
    authDomain: "chirp-nest-bd.firebaseapp.com",
    projectId: "chirp-nest-bd",
    storageBucket: "chirp-nest-bd.appspot.com",
    messagingSenderId: "219221827008",
    appId: "1:219221827008:web:3eb2856ecd91be244d3c25"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function save(userCredentials: { email: string; password: string }) {
    try {
        const { email, password } = userCredentials;

        if (email && password) {
            const docRef = await addDoc(collection(db, "users"), {
                email: email,
                password: password,
            });

            console.log("User created successfully");
        } else {
            console.error("Email or password is null or undefined");
        }
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function printUsersCollection() {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
}
