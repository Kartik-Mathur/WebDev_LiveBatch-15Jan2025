function greet(name: string) {
  console.log(`Hello ${name}`);
}

greet("Kartik");

function sum(a: number, b: number): number {
  return a + b;
}

let sum1 = (a: number, b: number): number => {
  return a + b;
};

let ans: number = sum(110, 20);
console.log(ans);

ans = sum1(20, 20);
console.log(ans);
