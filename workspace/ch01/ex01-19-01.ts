// ex01-19.ts 복사

// 상수의 그룹화
(() => {
  type ReadOnly = {
    // readonly JS: string;
    // readonly TS: string;
    // readonly REACT: string;
    readonly [language: string]: string; // 인덱스 시그니처를 사용해도 좋다
  };
  const ClassName: ReadOnly = {
    JS: "JavaScript",
    TS: "TypeScript",
    REACT: "React",
  };

  function getSchedule(subject: string): string | undefined {
    if (ClassName.JS === subject) {
      return `JavaScript 수업은 4일 교육 + 2일 프로젝트 입니다.`;
    } else if (ClassName.TS === subject) {
      return `TypeScript 수업은 3일 교육 + 1일 프로젝트 입니다.`;
    }
  }

  const jsSchedule = getSchedule(ClassName.JS);
  const tsSchedule = getSchedule(ClassName.TS);
  console.log(jsSchedule);
  console.log(tsSchedule);
})();
