(() => {
  interface Todo {
    title: string;
    content: string;
  }

  const todo1: Todo = {
    title: "할일 1",
    content: "내용 1",
  };

  const todo2: Partial<Todo> = {
    content: "내용 2",
  };

  const todo3: Partial<Todo> = {
    title: "할일 2",
  };

  function updateTodo(todo: Todo, newTodo: Partial<Todo>) {
    return { ...todo, ...newTodo };
  }

  console.log(updateTodo(todo1, todo2));
  console.log(updateTodo(todo1, todo3));
})();
