// ex03-13.ts 복사
(() => {
  // {} 빈 객체로 타입이 추론된 상태
  var todo1 = {} as Todo;
  todo1.title = "할일 1";

  // { title : string } 로 타입이 추론됨
  var todo2 = {
    title: "할일 2",
  } as Todo;

  todo2.content = "내용2";

  var todo3 = {
    title: "할일 3 ",
    content: "내용 3",
  };
  todo3.content = "수정 3";

  // 처음부터 타입스크립트로 만들었다면 ??

  interface Todo {
    title: string;
    content: string;
  }

  const todo4: Todo = {
    title: "할일 4 ",
    content: "내용 4",
  };

  console.log(todo1, todo2, todo3, todo4);
})();
