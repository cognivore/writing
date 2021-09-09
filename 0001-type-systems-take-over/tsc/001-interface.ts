interface Tagged<T> {
  tag: string;
  value: T;
}

let x: Tagged<string> = {
  tag: "hello",
  value: "world",
  ext: true
}

let y: Tagged<string> = {
  tag: 42,
  value: "41++"
}
