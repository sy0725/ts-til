// ex02-01.js 복사

(() => {
  class HighSchool {
    #kor = 0;
    #eng = 0;
    constructor(kor, eng) {
      this.#kor = kor;
      this.#eng = eng;
    }
    #sum() {
      return this.kor + this.eng;
    }
    avg() {
      return Math.round(this.sum() / 2);
    }
  }
  var s1 = new HighSchool(100, 91);
  console.log("평균", s1.avg());

  // 잘못된 사용
  s1[#eng] = 95;
  console.dir(s1);
  console.log("평균", Math.round(s1.sum() / 2));
})();
