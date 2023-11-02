/* eslint-disable @typescript-eslint/no-inferrable-types */
(() => {
  // string
  var str: string = "hello";
  // str = 100;
  // number
  var age: number = 30;
  // boolean
  var done: boolean = true;
  // object
  var todo: object = { todo: "Typescript 공부", done: false };
  // Array
  var items: Array<string> = ["JS공부", "TS공부"];
  var todoList: string[] = ["JS 프로젝트", "TS 프로젝트"];
  // tuple
  var users: [string, number] = ["김철수", 30];
  // any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var userName: any = "이일구";
  userName = 219;
  // null
  var nullVal: null = null;
  // undefined
  var undefined: undefined;

  console.log(
    str,
    age,
    done,
    todo,
    items,
    todoList,
    users,
    userName,
    nullVal,
    undefined
  );
  console.log(
    typeof str,
    typeof age,
    typeof done,
    typeof todo,
    typeof items,
    typeof todoList,
    typeof users,
    typeof userName,
    typeof nullVal,
    typeof undefined
  );
})();
