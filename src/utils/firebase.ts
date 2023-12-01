import { initializeApp } from "firebase/app";
import { dispatch } from "../store";
import { navigate, setUserCredentials } from "../store/actions";
import{getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, setPersistence, browserSessionPersistence} from "firebase/auth";
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
const auth=getAuth(app);
const db = getFirestore(app);

//export async function save(userCredentials: { email: string; password: string }) {
  //  try {
    //    const { email, password } = userCredentials;

      //  if (email && password) {
        //    const docRef = await addDoc(collection(db, "users"), {
          //      email: email,
            //    password: password,
            //});

           // console.log("User created successfully");
        //} else {
          //  console.error("Email or password is null or undefined");
        //}
   // } catch (e) {
     //   console.error("Error adding document: ", e);
   // }
//}

const registerUser = async ({
    email,
    password,
}: {
    email: string;
    password: string;
}): Promise<boolean> => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        console.log(userCredential.user);
        return true;
        // ...
    } catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        return false;
    }
    // ..
};

const loginUser = async ({
    email,
    password,
}: {
    email: string;
    password: string;
}) => {
    setPersistence(auth, browserSessionPersistence)
        .then(() => {
            return signInWithEmailAndPassword(auth, email, password);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
};

export async function printUsersCollection() {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
}

export {auth}
export {db}
export default {registerUser,loginUser}
