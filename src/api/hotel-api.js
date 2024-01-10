import axios from "axios";

const apiUrl = axios.create({
  baseURL: process.env.REACT_APP_HOTEL_API_URL,
  // baseURL: "http://localhost:8080",
});

/* Member Function */
export async function emailLogin(user) {
  return apiUrl
    .post("/api/login", user) //
    .then((res) => res.data)
    .catch((e) => e.response.data.comment);
}

export function logOut() {
  localStorage.removeItem("user-token");
}

export async function joinMember(user) {
  return apiUrl
    .post("/api/member", user) //
    .then((res) => res);
}

export async function updateMember(user, token) {
  return apiUrl
    .post(`/api/member/${user.userNo}`, user, {
      headers: { Authorization: token },
    }) //
    .then((res) => res.data);
}

export async function deleteMember(userNo) {
  return apiUrl
    .post(`/api/member/${userNo}/delete`) //
    .then((res) => res);
}

export async function getMember(userNo, token) {
  if (userNo) {
    return apiUrl
      .get(`/api/member/${userNo}`, {
        headers: { Authorization: token },
      }) //
      .then((res) => {
        delete res.data.password;
        return res.data;
      });
  }
}

export async function getAllMember(token) {
  return apiUrl
    .get("/api/member", {
      headers: { Authorization: token },
    }) //
    .then((res) => res.data);
}

export async function emailCheck(email) {
  return apiUrl
    .post("/api/member/email-check", { email: email }) //
    .then((res) => false)
    .catch((e) => e.response.status === 400);
}

/* Room Function */
export async function addRoom(room, token) {
  return apiUrl
    .post(
      "/api/admin/room",
      {
        room: {
          area: room.area,
          bedType: room.bedType,
          content: room.content,
          location: room.location,
          outlook: room.outlook,
          people: room.people,
          price: room.price,
          roomType: room.roomType,
          title: room.title,
        },
        image: { imgUrls: room.imgUrl },
      },
      {
        headers: { Authorization: "Bearer " + token },
      }
    ) //
    .then((res) => res);
}

export async function updateRoom(room, token) {
  return apiUrl
    .post(`/api/admin/room/${room.no}`, room, {
      headers: { Authorization: "Bearer " + token },
    }) //
    .then((res) => res);
}

export async function deleteRoom(roomNo, token) {
  return apiUrl
    .post(`/api/admin/room/${roomNo}/delete`, roomNo, {
      headers: { Authorization: "Bearer " + token },
    }) //
    .then((res) => res.data);
}

export async function getRoom(roomNo) {
  return apiUrl
    .get(`/api/${roomNo}`) //
    .then((res) => res);
}

export async function getAllRoom() {
  return apiUrl
    .get("/api/room") //
    .then((res) =>
      res.data.map((item) => {
        if (item.imgUrls !== null && item.imgUrls.indexOf(",") !== -1) {
          return { ...item, imgUrls: item.imgUrls.split(",") };
        }
        return { ...item, imgUrls: [item.imgUrls || ""] };
      })
    );
}

export async function getFilters() {
  return apiUrl
    .get("/api/room/filter") //
    .then((res) => res.data);
}

/* Attraction Function */
export async function addAttraction(attraction, token) {
  return apiUrl
    .post("/api/admin/attraction", attraction, {
      headers: { Authorization: "Bearer " + token },
    }) //
    .then((res) => res.data);
}

export async function updateAttraction(attraction, token) {
  return apiUrl
    .post(`/api/admin/attraction/${attraction.no}`, attraction, {
      headers: { Authorization: "Bearer " + token },
    }) //
    .then((res) => res.data);
}

export async function deleteAttraction(attractionNo, token) {
  return apiUrl
    .post(`/api/admin/attraction/${attractionNo}/delete`, attractionNo, {
      headers: { Authorization: "Bearer " + token },
    }) //
    .then((res) => res.data);
}

export async function getAllAttraction() {
  return apiUrl
    .get("/api/attraction") //
    .then((res) => res.data);
}

/* Reservation Function */
export async function addReservation(reservation, token) {
  return apiUrl
    .post("/api/reservation", reservation, {
      headers: { Authorization: "Bearer " + token },
    }) //
    .then((res) => res.data);
}

export async function updateReservation(reservation, token) {
  return apiUrl
    .post(`/api/reservation/${reservation.no}`, reservation, {
      headers: { Authorization: "Bearer " + token },
    }) //
    .then((res) => res);
}

export async function deleteReservation(reservationNo, token) {
  return apiUrl
    .post(`/api/reservation/${reservationNo}/delete`, reservationNo, {
      headers: { Authorization: "Bearer " + token },
    }) //
    .then((res) => res);
}

export async function getReservation(reservationNo, token) {
  if (reservationNo) {
    return apiUrl
      .get(`/api/reservation/${reservationNo}`, {
        headers: { Authorization: "Bearer " + token },
      }) //
      .then((res) => res)
      .catch((e) => console.log(e));
  }
}

export async function getUserReservation(userNo, token) {
  return apiUrl
    .get(`/api/reservation/user/${userNo}`, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((res) => res.data);
}

export async function getRoomReservation(roomNo, token) {
  return apiUrl
    .get(`/api/reservation/room/${roomNo}`, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((res) => res.data);
}

export async function getAllReservation(token) {
  return apiUrl
    .get("/api/reservation", { headers: { Authorization: "Bearer " + token } }) //
    .then((res) => res.data);
}
