export function apiErrorCheck(data) {
  console.log(data);

  /* 로그인 에러 체크 */
  if (data === "Invalid email") {
    window.alert("존재하지 않는 이메일입니다, 이메일을 다시 확인해주세요.");
    return;
  } else if (data === "Invalid password") {
    window.alert("비밀번호를 확인해주세요.");
    return;
  }

  /* 회원가입 에러 체크 */
  if (data === "Member Add Fail") {
    window.alert(
      "네트워크 연결이 원활하지 않습니다, 잠시후 다시 시도해주세요."
    );
    return;
  }

  return true;
}
