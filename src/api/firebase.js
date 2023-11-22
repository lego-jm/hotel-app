import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { get, getDatabase, ref, set } from "firebase/database";
import { v4 as uuid } from "uuid";

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

export async function addRoom(room) {
  const uid = uuid();
  set(ref(database, `rooms/${uid}`), {
    ...room,
    id: uid,
    people: parseInt(room.people),
    price: parseInt(room.price),
  });
}

export async function getRooms() {
  return get(ref(database, `rooms/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val());
      }
      return {};
    })
    .catch((error) => {
      console.error(error);
    });
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
