class MyList<T> {
  _first: MyListItem<T> | undefined = undefined;
}
class MyListItem<T> {
  _value: T;
  _next: MyListItem<T> | undefined = undefined;
  constructor(value: T) {
    this._value = value;
  }
}

const arr = new MyList<number>();
for (let i = 0; i < 10; i++) {
  arr.push(i * i);
}
for (let i = 0; i < arr.length(); i++) {
  console.log(arr.get(i));
}
