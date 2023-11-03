(() => {
  type User = {
    id: string;
    name: string;
    address: string;
    phone: string;
  };

  type ArrayUser = {
    [Prop in keyof User]: string[]; // keyof 를 사용하면 User가 가지고 있는 값들을 인해 만들어준다.  string[]로 새로운 ArrayUser 라는 타입 생성
  };

  const kim: User = {
    id: "kim",
    name: "김철수",
    address: "서울시",
    phone: "010000000",
  };

  const lee: ArrayUser = {
    id: ["kim"],
    name: ["김철수"],
    address: ["서울시"],
    phone: ["010000000"],
  };
})();
