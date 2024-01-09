export function validationCheck(data) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  console.log(data);
  if (data === "Invalid email") {
    window.alert("이메일을 확인해주세요.");
    return false;
  } else if (data === "Invalid password") {
    window.alert("비밀번호를 확인해주세요.");
    return false;
  } else if (!emailPattern.test(data)) {
    window.alert("이메일 형식을 확인해주세요.");
    return false;
  }

  /* if (data === "auth/invalid-login-credentials") {
    window.alert("비밀번호를 확인해주세요");
    return false;
  } else if (data === "auth/invalid-email") {
    window.alert("이메일을 확인해주세요");
    return false;
  } else if (data === "auth/weak-password") {
    window.alert("비밀번호는 6자리 이상 입력해주세요.");
    return false;
  } else if (data === "auth/too-many-requests") {
    window.alert("로그인 시도를 너무 많이 했습니다, 1분 후 다시 시도해주세요");
    return false;
  } */

  return true;
}
