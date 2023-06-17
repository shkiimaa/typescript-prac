{
  // Enum 여러가지의 관련된 상수의 값들을 한곳에 모아서 정의할 수 있게 도와주는 타입이다.
  //JavaScript에선 상수를 정의하기 위해선 아래와 같이 대문자로 정의한다.
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;

  const MONDAY = 0;
  const TUSEDAY = 1;
  const WEDNESDAY = 2;
  // JS에선 Enum 타입이 따로 없기에 위와 같은 상수를 모아두어 정의하기위해선 아래와 같은 과정이 필요하다
  // freeze API를 사용하여 객체를 동결시켜 존재하는 값이 변경되지 않도록 한다.
  const DAYS_ENUM = Object.freeze({
    MONDAY: 0,
    TUSEDAY: 1,
    WEDNESDAY: 2,
  });

  //TypeScript
  // enum 의 값을 정해주지 않으면 자동으로 인덱스번호를 매칭한다.
  // 0 부터 시작하지 않고 1부터 시작하게 하고싶다 하면 Days의 monday의 값에 1을 할당해주면 자동으로 다음 프로퍼티는 2로 매칭된다.
  enum Days {
    monday, // value = 0
    tuseday, // value = 1
    wendesday, // value = 2
  }

  // enum은 되도록이면 사용안하는게 좋다. enum을 변수에 할당한 후 값을 변경하게되면 enum과 상관없는 숫자도 할당이 가능하기 때문이다.
  // 타입스크립트 5.0 버전이 릴리즈 되면서 위 문제가 해결되었음
  let monday: Days = Days.monday;
  monday = 2;
  console.log(Days);
}
