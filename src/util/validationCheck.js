export function validationCheck(data) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!data?.email) {
    window.alert("이메일을 먼저 입력해주세요.");
    return;
  } else if (!emailPattern.test(data.email)) {
    window.alert("이메일을 형식에 맞게 입력해주세요.");
    return;
  } else if (!data?.password) {
    window.alert("비밀번호를 입력해주세요.");
    return;
  } else {
    return true;
  }
}
