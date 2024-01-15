const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (name.value === " " || name.value == null) {
    messages.push("이름을 입력하세요.");
  }

  if (password.value.length <= 6) {
    messages.push("비밀번호는 최소 6글자 입력해야합니다.");
  }

  if (password.value.length >= 20) {
    messages.push("비밀번호는 최대 20글자 입력해야합니다.");
  }

  if (password.value === name.value) {
    messages.push("아이디와 동일한 값을 비밀번호로 설정할 수 없습니다.");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  } else {
    window.location.href = "https://www.naver.com";
    alert("제출 완료");
  }
});
