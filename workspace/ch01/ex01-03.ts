(() => {
  function getCount(count: number): string {
    return "Count" + count;
  }
  getCount(10);
  // getCount("20"); // 매개변수가 string 이라 x
  // getCount(10, 20); // 매개변수가 1개인데 2개있어서 x
  // getCount(); // 매개변수가 없어서 x
  var number: string = getCount(30);
  console.log(number);
})();
