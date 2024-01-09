import moment from "moment";

export function dataExpire(data, tts) {
  const expireTime = moment.now() + tts;

  return { ...data, expire: expireTime };
}

export function checkData(tokenName) {
  const data = JSON.parse(localStorage.getItem(tokenName));

  if (!data) {
    return null;
  }

  if (data.expire <= moment.now()) {
    localStorage.removeItem("user-token");
    return null;
  }

  return data;
}
