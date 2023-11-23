import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { get, getDatabase, ref, remove, set } from "firebase/database";
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
const nowDate = new Date();

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
    modifyDate: nowDate.toLocaleString(),
    createdDate: nowDate.toLocaleString(),
  });
}

export async function updateRoom(room) {
  set(ref(database, `rooms/${room.id}`), {
    ...room,
    people: parseInt(room.people),
    price: parseInt(room.price),
    modifyDate: nowDate.toLocaleString(),
  });
}

export async function getRooms() {
  return get(ref(database, `rooms/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val());
      }
      return null;
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

export async function removeRoom(id) {
  remove(ref(database, `rooms/${id}`));
}
