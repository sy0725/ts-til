// 인터페이스
// 객체 타입 선언
(() => {
  // 객체의 타입 선언
  interface User {
    name: string;
    age: number;
  }

  // 객체생성
  var kim: User = {
    name: "김철수",
    age: 30,
  };

  console.log(kim);

  function printUser(user: User): void {
    console.log(user.name, user.age);
  }
  printUser(kim);
})();
