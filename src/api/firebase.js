import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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
  return signInWithPopup(auth, provider).catch((error) => console.error(error));
}

export async function emailLogin(member) {
  signInWithEmailAndPassword(auth, member.email, member.password).catch(
    (error) => console.error(error)
  );
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
        const sort = Object.values(snapshot.val()).sort(
          (a, b) => new Date(a.createdDate) - new Date(b.createdDate)
        );
        return sort;
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

export async function getFilterList() {
  return get(ref(database, `rooms/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const dupleFilter = new Set(
          Object.values(snapshot.val()).map((room) => room.roomtype)
        );
        return [...dupleFilter];
      }
      return null;
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function joinMember(member) {
  createUserWithEmailAndPassword(auth, member.email, member.password).catch(
    (error) => console.log(error.message)
  );
}
