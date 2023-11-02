// index signature, string
(() => {
  interface User {
    name: string;
    email: string;
    age: number; // 이건 안된다. 이외의것들 (etc) 는 string 으로 지정을 해놨기 때문에 유니언 타입을 이용해서 string | number 으로 설정해준다.

    // phone?: string;
    // address?: string;
    // hobby?: string;
    // 동일한 속성을 하나의 합칠때 사용한다.
    // 모든걸 적기 귀찮을때 ?? 사용하는 index signature , string | number 이다 . 이름(etc) 이거는 아무거나 넣어도 상관없다.
    [etc: string]: string | number;
  }

  var kim: User = {
    name: "전선용",
    email: "sy0725@gmail.com",
    age: 29,
    phone: "01057308888",
    address: "수원",
    hobby: "운동",
  };

  var lee: User = {
    name: "전단지",
    age: 5,
    email: "냠냠이@gmail.com",
  };

  console.log(kim, lee);
})();
