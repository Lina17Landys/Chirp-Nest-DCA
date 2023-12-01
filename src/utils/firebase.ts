import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebaseConfig"
import { Screens } from "../types/store";
import { dispatch } from "../store";
import { navigate, setUserCredentials } from "../store/actions";
import{ getStorage } from "firebase/storage"
import{getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, setPersistence, browserSessionPersistence} from "firebase/auth";
import { doc, getFirestore, collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";


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
    const querySnapshot = await getDocs(collection(db, "user"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
}

export {auth}
export {db}
export default {registerUser,loginUser}
