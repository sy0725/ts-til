(() => {
  interface Todo {
    _id: number;
    title: string;
  }

  type MyPartial<T> = {
    // _id?: number;
    // title?: string;    가장 단순한 하드코딩방법

    // [P in "id" | "title"]?: Todo[P]; // P 는 임의로 정한것일뿐 아무렇게나 적어도된다. 두번째 방법

    [P in keyof T]?: T[P]; // keyof 를 이용한 Mapped Type 방법
  };

  const todo1: Todo = {
    _id: 1,
    title: "할일 1",
  };

  const todo2: MyPartial<Todo> = {
    title: "할일 2",
  };

  const todo3: Partial<Todo> = {
    title: "할일 3",
  };

  console.log(todo1, todo2, todo3);
})();
