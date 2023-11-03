(() => {
  // var a = 10 as string;

  var a = 10 as any as string;
  console.log(a);
  // console.log(a.toLowerCase());

  // 함수는 만든 순간 타입이 추론이된다.
  function getNum(num) {
    return num;
  }
  // 리턴 타입이 추론되면 타입 단언을 사용할 필요 없다.
  // 리턴 타입이 여러개로 추론되거나 any일 경우 명시적으로 타입을 지정
  var returnNum = getNum(3.141592) as number; // 이럴땐 단언적으로 숫자로 표현해야할때 사용(의미없다)
  console.log(returnNum.toFixed(2)); // 3.14

  var str = getNum("hello") as string;
  console.log(str.toUpperCase()); // HELLO
})();
