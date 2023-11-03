(() => {
  var div = document.querySelector("div");
  // non null assertion (절대 null 은 없어 ! 라고 단언하는 의미)
  // div!.innerHTML = 'hello';
  //^ (local var) div: HTMLDivElement | null

  if (div !== null) {
    // 타입 가드  //^ 잘못된 타입(값)으로 발생할 수 있는 문제점 오류를 막아준다
    div.innerHTML = "hello";
    //^ (local var) div: HTMLDivElement
  }
})();
