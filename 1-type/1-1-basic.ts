{
  /*
   * JavaScript
   * primitive : number, string, boolean, bigint, sybol, null, undefined
   * object : function, array, object
   */

  // number
  const num: number = 1;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = true;

  // undefined
  let name: undefined; // 💩
  let name2: string | undefined;
  name2 = 'hello';
  name2 = undefined;

  // null
  let person: null; // 💩
  let person2: string | null;
  person2 = 'hello';
  person2 = null;

  // unknown 💩
  let notSure: unknown; // 어떤 종류의 데이터가 담길지 알 수 없는 타입
  notSure = 'he';
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = 'hello';

  // void  함수에서 아무것도 리턴하지 않을때
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 변수에 void 선언시엔 undefined만 할당 가능 💩

  // never
  function throwError(message: string): never {
    throw new Error(message);
  }

  // object  원시타입을 제외한 모든 오브젝트 전달가능 💩
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'kim' });
  acceptSomeObject({ animal: 'dog' });
  acceptSomeObject(['a', 'b']);
}
