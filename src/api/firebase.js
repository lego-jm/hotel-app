import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { get, getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const database = getDatabase();

export async function googleLogin() {
  signInWithPopup(auth, provider).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

export function getAuthState(callback) {
  onAuthStateChanged(auth, async (user) => {
    const updateUser = user ? await getAdminInfo(user) : null;
    callback(updateUser);
  });
}

export async function logOut() {
  auth.signOut();
}

async function getAdminInfo(user) {
  return get(ref(database, `admins/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const isAdmin = snapshot.val().includes(user.uid);
        if (isAdmin) {
          return { ...user, isAdmin };
        }
        return { user };
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
