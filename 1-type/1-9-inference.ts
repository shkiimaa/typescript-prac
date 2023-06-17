{
  // Type Inference ( 타입 추론 )
  let text = 'hello';
  // 파라미터는 기본적으로 any 타입이 할당되기에 타입을 지정해줘야한다.
  // Default parameter 설정시 타입을 명시하지 않아도 default값이 타입으로 설정된다.

  function print(message = 'hello') {
    console.log(message);
  }
  print('hello');

  function add(x: number, y: number) {
    return x + y;
  }

  const addMumber = add(1, 2);
}
