export function validationCheck(data) {
  const { errorCode } = data;

  console.log(data);

  if (errorCode === "auth/invalid-login-credentials") {
    window.alert("비밀번호를 확인해주세요");
    return;
  } else if (errorCode === "auth/invalid-email") {
    window.alert("이메일을 확인해주세요");
    return;
  } else if (errorCode === "auth/weak-password") {
    window.alert("비밀번호는 6자리 이상 입력해주세요.");
    return;
  } else if (errorCode === "auth/too-many-requests") {
    window.alert("로그인 시도를 너무 많이 했습니다, 1분 후 다시 시도해주세요");
    return;
  }
}
