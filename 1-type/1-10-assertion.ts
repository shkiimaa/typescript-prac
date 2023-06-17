{
  // Type Assertions
  // as 또는 <>를 사용하여 타입을 확정시킨다. number 타입에 string을 확정시키거나 하는게 가능하니 조심해서 사용해야한다.
  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();
  (result as string).length;
  (<string>result).length;

  const wrong: any = 5;
  console.log((wrong as number[]).push(1));
  // wrong 변수는 number이지만 as를 사용하여 강제로 array타입을 주입하여 push를 사용해도 에러가 나지 않는다. type assertion을 사용할땐 100% 확신할 떄만 사용하자.

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2);
  // !는 optional의 반대 효과, 무조건 있다고 판단한다. type Assertion과 같음

  const button = document.querySelector('class')!;
  /* querySelector의 타입은 Element | null 이다. 이러한 경우에 아래 와 같이 if문을 사용하여 타입 네로잉을 해줘야하지만 맨끝에 !를 붙임으로써 무조건 있다고 판단시켜 if문이나 옵셔널 체이닝을 사용하지 않고 사용이 가능하다.
   */
  if (button) {
    button.nodeValue;
  }
}
