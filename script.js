function getSumOfNumbers() {
  let result = 0;
  return function (num) {
    result = result + num;
    return result;
  };
}

const sumFunc = getSumOfNumbers();

console.log(sumFunc(3));
console.log(sumFunc(5));
console.log(sumFunc(20));
console.log(sumFunc(45));
