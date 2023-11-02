(() => {
  class Queue<T> {
    data: T[] = [];
    push(item: T): void {
      this.data.push(item);
    }
    pop(): T | undefined {
      return this.data.shift();
    }
  }

  var sq = new Queue();
  sq.push("hello");
  sq.push("javascript");
  sq.push("world");

  var s1 = sq.pop();
  var s2 = sq.pop();
  var s3 = sq.pop();
  console.log(s1, s2, s3);

  var nq = new Queue();
  nq.push("hello");
  nq.push("javascript");
  nq.push("world");

  var n1 = nq.pop();
  var n2 = nq.pop();
  var n3 = nq.pop();
  console.log(n1, n2, n3);
})();
