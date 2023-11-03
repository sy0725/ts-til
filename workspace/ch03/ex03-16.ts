(() => {
  // instanceof 는 {} 로 인해 생성되었는가 물어보는 과정, instanceof 뒤에 있는거 앞에 있는걸로 생성되었는가 물어보는 메서드
  console.log(new Function() instanceof Function);
  console.log({} instanceof Object);
  console.log({} instanceof Array);
  console.log([] instanceof Object);
  console.log([] instanceof Date);
  console.log([] instanceof Function);
  console.log(new Date() instanceof Function);

  class Todo {
    title: string;
    content: string;

    constructor(title: string, content: string) {
      (this.title = title), (this.content = content);
    }
    getTitle() {
      return this.title;
    }
  }

  function getTitle(todo: Todo | string[]) {
    // 타입 가드를 적용해서 title 값을 리턴하는 함수 작성
    if(todo instanceof Todo) {
     return todo.getTitle()
    } else (todo instanceof Array) {
      return todo[0]
    }
  }

  const todo1 = new Todo("할일 1", "내용 1");
  const todo2 = ["할일 2", "내용 2"];

  console.log(getTitle(todo1));
  console.log(getTitle(todo2));
})();
