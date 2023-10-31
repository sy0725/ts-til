# 멋쟁이 사자처럼 Front-End School Plus 1기: TypeScript 프로그래밍
* GitHub URL: https://github.com/uzoolove/FESP01-typescript

## 개발환경 구축
### 프로그램 설치
* 본인의 OS에 맞는 버전 다운로드 후 설치
1. Nodejs 설치: https://nodejs.org/en/download
2. Visual Studio Code 설치: https://code.visualstudio.com/download
3. Git 설치: https://git-scm.com/downloads

### Visual Studio Code 설정
1. VSCode 실행
2. File > Preferences > Settings
	* "Files: Auto Save": onFocusChange
	* "Editor: Font Size": 각자 조절
	* "Editor: Tab Size": 2
	* "Editor: Detect Indentation": 체크 해제
	* "Files: Readonly Include"
		- Add Pattern > workspace-ins/** 입력한 후 OK 선택
		- Add Pattern > sample/** 입력한 후 OK 선택
		- Readonly Include가 보이지 않을 경우 VSCode를 최신 버전(1.79 이상)으로 업데이트
3. Github 레퍼지토리 복사
	* View > Source Control > Clone Repository 선택
	* <nohyper>https</nohyper>://github.com/uzoolove/FESP01-typescript.git 입력
	* 복사할 적당한 폴더 선택 후 Select as Repository Destination 선택
	* Open 선택

### TypeScript Compiler 설치
* node.js용 TypeScript Compiler 모듈을 global로 설치(어느 경로에서나 tsc 명령어 사용 가능)
* VSCode > View > Terminal
```
npm i typescript -g
```

## 샘플 코드 복사
* workspace 폴더로 sample 폴더 복사해서 실습 진행
* 완성된 강사의 코드는 workspace-ins 폴더에서 확인
### 1일차
* sample/day1 폴더 내부의 파일과 폴더를 workspace 폴더에 복사

## 터미널 테스트
* workspace/ch01/ex01-01.ts 파일 작성
```
function hello(name: string): string {
  return 'Hello ' + name;
}
console.log(hello('TypeScript'));
```
* VSCode 터미널에서 컴파일
```
tsc hello.ts
```
* 실행
```
node hello.js
```

## 브라우저 테스트
* 강사의 완성된 코드를 테스트하려면 workspace-ins 폴더로 이동

### 타입스크립트 설정 파일
* 타입스크립트 설정 파일(tsconfig.json) 생성
```
tsc --init
```
* tsconfig.json 파일 수정
  - "rootDir": "./" 주석 해제
  - "outDir": "./" 주석 해제 후 "outDir": "./dist"로 수정

### tsc --watch 옵션
* 하위 폴더를 포함해서 ts 파일 변경을 감지하고 자동으로 컴파일한 후 outDir로 지정한 폴더에 js 파일 생성
```
tsc --watch
```

### 웹서버 구동
```
npx serve .
```
* http://localhost:3000 접속
  - 이미 3000 포트가 사용중일 경우 콘솔 안내 메세지에 따라서 접속
* 각 예제 클릭해서 브라우저 개발자 도구 > 콘솔 탭에서 결과 확인

## 수업 자료
* PPT 폴더 확인

## 소스코드 공유
* 본인의 소스코드를 강사에게 공유하고 싶을때
* StackBlitz: https://stackblitz.com 접속 후 문제 있는 소스코드 붙여 넣은 후 채팅창에 url 입력

