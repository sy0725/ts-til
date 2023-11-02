(() => {
  function echoString(msg: string): string {
    return msg;
  }

  function echoNum(msg: number): number {
    return msg;
  }

  const result1: string = echoString("hello");
  console.log(result1);

  const result2: number = echoNum(3.141592);
  console.log(result2);
})();
