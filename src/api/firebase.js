import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  deleteUser,
} from "firebase/auth";
import { get, getDatabase, ref, remove, set } from "firebase/database";
import moment from "moment";
import { v4 as uuid } from "uuid";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
};

initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const database = getDatabase();
const nowDate = moment().format("YYYY/MM/DD HH:mm:ss");

export async function googleLogin() {
  return signInWithPopup(auth, provider)
    .then((res) => {})
    .catch((error) => console.error(error));
}

export async function emailLogin(member) {
  return signInWithEmailAndPassword(auth, member.email, member.password).catch(
    (error) => ({ errorCode: error.code })
  );
}

export async function joinUser(newUser) {
  delete newUser.passwordCheck;
  return createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
    .then((userCredential) => {
      const user = userCredential.user;
      set(ref(database, `users/${user.uid}`), {
        uid: user.uid,
        ...newUser,
        createdDate: nowDate,
        modifyDate: nowDate,
      }).catch((error) => ({ errorCode: error.code }));
    })
    .catch((error) => ({ errorCode: error.code }));
}

export async function updateUser(updateUser) {
  delete updateUser.passwordCheck;
  set(ref(database, `users/${updateUser.uid}`), {
    ...updateUser,
    modifyDate: nowDate,
  });
}

export async function updatePassWordSendEmail(email) {
  sendPasswordResetEmail(auth, email).then((res) => console.log(res));
}

export async function removeAccount(user) {
  deleteUser(auth.currentUser)
    .then((res) => console.log(res))
    .catch((error) => console.error(error));

  remove(ref(database, `users/${user.uid}`));
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

export async function logOut() {
  auth.signOut();
}

export function getAuthState(callback) {
  onAuthStateChanged(auth, async (user) => {
    const updateUser = user ? await getAdminInfo(user) : null;

    callback(updateUser);
  });
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
    .then(async (snapshot) => {
      if (snapshot.exists()) {
        const isAdmin = snapshot.val().includes(user.uid);
        const userInfo = get(ref(database, `users/${user?.uid}`));
        const isSocialLogin = user.providerData[0].providerId === "google.com";
        const isJoin = !(await userInfo).val() ? false : true;

        if (isAdmin) return { ...user, isAdmin };

        return !isSocialLogin && isJoin ? { ...user, isJoin } : null;
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

export async function addReservation(reservation) {
  const reservationUid = uuid();
  const { userInfo } = reservation;

  set(ref(database, `reservation/${userInfo.uid}/${reservationUid}`), {
    ...reservation,
    id: reservationUid,
    people: parseInt(reservation.people),
    totalPrice: parseInt(reservation.totalPrice),
    diffDay: parseInt(reservation.diffDay),
    status: "ing",
    createdDate: nowDate,
    modifyDate: nowDate,
  }).catch((error) => console.error(error));
}

export async function updateReservation(reservation) {
  const { userInfo } = reservation;

  set(ref(database, `reservation/${userInfo.uid}/${reservation.id}`), {
    ...reservation,
    people: parseInt(reservation.people),
    totalPrice: parseInt(reservation.totalPrice),
    diffDay: parseInt(reservation.diffDay),
    modifyDate: nowDate,
  }).catch((error) => console.error(error));
}

export async function getUsers() {
  return get(ref(database, `users/`)) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        const sort = Object.values(snapshot.val()).sort(
          (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
        );
        return sort;
      }
      return null;
    })
    .catch((error) => console.error(error));
}

export async function getUserInfo(uid) {
  return get(ref(database, `users/${uid}`))
    .then((snapshot) => snapshot.val())
    .catch((error) => {
      console.error(error);
    });
}

export async function getReservationUser(uid) {
  return get(ref(database, `reservation/${uid}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const sort = Object.values(snapshot.val()).sort(
          (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
        );
        return sort;
      }
      return [];
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function getAllReservation() {
  return get(ref(database, `reservation/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const sort = Object.values(
          Object.assign(...Object.values(snapshot.val()))
        ).sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
        return sort;
      }
      return null;
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function getRoomReservation(roomId) {
  return get(ref(database, `reservation/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const filter = Object.values(
          Object.assign(...Object.values(snapshot.val()))
        ).filter((room) => room.roomId === roomId && room.status !== "cancle");

        return filter;
      }
      return null;
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function removeReservation(reservationId, uId) {
  remove(ref(database, `reservation/${uId}/${reservationId}`));
}

/* attraction */
export async function addAttraction(attraction) {
  const attractionUid = uuid();

  set(ref(database, `attractions/${attractionUid}`), {
    id: attractionUid,
    ...attraction,
    imgUrl: attraction.imgUrl[0],
    createdDate: nowDate,
    modifyDate: nowDate,
  }) //
    .catch((error) => console.error(error));
}

export async function updateAttraction(attraction) {
  set(ref(database, `attractions/${attraction.id}`), {
    ...attraction,
    modifyDate: nowDate,
  }) //
    .catch((error) => console.error(error));
}

export async function removeAttraction(attractionId) {
  remove(ref(database, `attractions/${attractionId}`));
}

export async function getAttraction() {
  return get(ref(database, `attractions/`)).then((snapshot) => {
    if (snapshot.exists()) {
      const sort = Object.values(snapshot.val()).sort(
        (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
      );
      return sort;
    }
    return null;
  });
}
