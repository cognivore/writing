function unused(x) {
    return function (y) {
        return x;
    };
}
function twice(x, y) {
    return x(x(y));
}
console.log(unused(42)("hello"));
console.log(twice(function (x) { return x * x; }, 10));
