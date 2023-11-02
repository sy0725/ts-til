// 타입 별칭
// ex01-05.ts 복사
(() => {
  type Message = string | number;

  // 유니언 타입 사용
  function log(msg: Message) {
    console.log(msg);
  }
  var msg1: Message = "world";
  var msg2: Message = 200;
  msg1 = 300;
  log(msg1);
  log(msg2);
})();
