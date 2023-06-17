{
  // Array
  const fruits: string[] = ['apple', 'banana'];
  const scores: Array<number> = [1, 2, 3];

  function printArray(fruits: readonly string[]) {}

  // Tuple -> 가독성이 좋지 않기 때문에 interface, type alias, class 로 대체하여 사용하는것이 좋음
  let students: [string, number];
  students = ['nmae', 123];
  students[0]; //name
  students[1]; //123
}
