(() => {
  interface Todo {
    // 객체를 위한 interface
    readonly _id: number; // readonly 를 앞에다가 적으면 수정이 불가능한 값
    title: string;
    content: string;
    done?: boolean;
  }

  interface Toggle {
    // 익명함수를 위한 interface
    // param 이라는 이름이 아니고 다른것도 가능하다
    (param: Todo): void;
  }

  var todo1: Todo = {
    _id: 1,
    title: "할 일1",
    content: "인터페이스 사용",
    done: false,
  };
  var todo2: Todo = {
    _id: 2,
    title: "할 일2",
    content: "인터페이스 사용2",
  };

  var toggleFn: Toggle = function (param: Todo): void {
    param.done = !param.done;
  };

  // todo1._id = 3; // 읽기 전용속성으로 _id 에 할당할 수 없습니다. 라는 에러문구가 나온다.
  todo1.title = "집에가자";

  toggleFn(todo1);
  toggleFn(todo1);
  console.log(todo1);
  console.log(todo2);
})();
