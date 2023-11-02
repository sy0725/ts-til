(function () {
  // 인터페이스 병합
  interface Todo {
    title: string;
    content: string;
  }

  interface Todo {
    _id: number;
    done: boolean;
  }

  var todo1: Todo = {
    title: "할일1",
    content: "등록할 때 사용",
    _id: 1,
    done: true,
  };

  console.log(todo1);
})();
