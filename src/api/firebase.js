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
const date = new Date();
const nowDate = `${date.getFullYear()}/${
  date.getMonth() + 1
}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getMilliseconds()}`;

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
  const roomUid = uuid();
  set(ref(database, `rooms/${roomUid}`), {
    ...room,
    id: roomUid,
    people: parseInt(room.people),
    price: parseInt(room.price),
    modifyDate: nowDate,
    createdDate: nowDate,
  });
}

export async function updateRoom(room) {
  set(ref(database, `rooms/${room.id}`), {
    ...room,
    people: parseInt(room.people),
    price: parseInt(room.price),
    modifyDate: nowDate,
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
  createUserWithEmailAndPassword(auth, member.email, member.password)
    .then((userCredential) => {
      const user = userCredential.user;
      delete member.passwordCheck;
      set(ref(database, `users/${user.uid}`), {
        uid: user.uid,
        ...member,
        createdDate: nowDate,
        modifyDate: nowDate,
      });
    })
    .catch((error) => console.log(error.message));
}

export async function idCheck(email) {
  return get(ref(database, `users/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const isIdCheck = Object.values(snapshot.val()).filter(
          (item) => item.email === email
        );

        return isIdCheck.length > 0 ? true : false;
      }
      return null;
    })
    .catch((error) => {
      console.error(error);
    });
}
