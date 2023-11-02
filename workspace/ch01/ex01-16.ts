(function () {
  // 인터페이스 다중 상속
  interface Todo {
    title: string;
    content?: string;
  }

  interface TodoList extends Todo {
    _id: number;
    title: string;
    done: boolean;
  }

  interface TodoInfo extends Todo, TodoList {
    createdAt: Date;
    updateAt: Date;
  }

  var todo1: Todo = {
    title: "할일1",
    content: "등록할 때 사용",
  };

  var todo2: TodoList = {
    _id: 2,
    title: "오예",
    done: true,
  };

  var todo3: TodoInfo = {
    _id: 3,
    title: "할일 3",
    content: "시간을 포함한 상세 조회에 사용",
    done: true,
    createdAt: new Date(),
    updateAt: new Date(),
  };

  console.log(todo1, todo3, todo2);
})();
