# TypeScript

- Microsoft에서 만든 프로그래밍 언어
- 오픈소스 프로젝트
- 어느 브라우저, OS에서 JavaScript가 동작하는 어떤 곳에서든 사용 가능
- Superset of JavaScript
- 동적으로 타입이 결정되는 JavaScript와 달리 정적으로 타입이 결정된다.

## 타입스크립트가 뜨는 이유

1. 타입이 정적이다.
   -> JavaScript는 가독성이 떨어지고 런타임에서 에러 발생 가능
2. OOP(Object Oriented Programming)
   -> 모듈성, 재사용성, 확장성, 유지 보수성

## 실습

```
npm install -g typescript
echo console.log('hello world') >> main.ts
tsc main.ts
node main.js
```

## 명령어 설명

```
tsc main.ts // main.ts를 main.js로 컴파일
tsc main.ts -w // 실시간으로 main.ts를 컴파일
```
