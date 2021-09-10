function unused<T>(x: T) {
  return function<K>(y: K) {
    return x;
  }
}

function twice<T>(x: (t: T) => T, y: T) {
  return x(x(y))
}

console.log(unused(42)("hello"));
console.log(twice((x) => x*x, 10))
