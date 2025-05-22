function helloWorld(): void {
  console.log("Hello World");
}

function callMyFun(fn: () => void) {
  fn();
}

function callMyFun1(fn: (a: number, b: number) => void) {
  fn(10, 20);
}

function sum(x: number, y: number): void {
  console.log(x + y);
}

callMyFun(helloWorld);
callMyFun1(sum);
