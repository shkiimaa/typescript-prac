{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
    coffeeBeans: number;
  };

  // public
  // private 외부에서 접근 불가
  // protected 외부에서 접근은 불가하지만 상속받은 클래스에선 접근 가능

  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    } // static으로 생성자 함수를 사용을 하면 constructor를 private 을 주어 생성자 함수로만 사용하게 한다.

    private constructor(Beans: number) {
      this.coffeeBeans = Beans;
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater 0');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans');
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;

      return {
        shots,
        hasMilk: false,
        coffeeBeans: this.coffeeBeans,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(30);
  console.log(maker);
  console.log(maker.makeCoffee(2));
}

{
  class User {
    firstName: string;
    lastName: string;
    fullName: string;

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullName = `${firstName} ${lastName}`;
    }
  }

  const user = new User('Steve', 'jobs');
  console.log(user.fullName);
  user.firstName = 'Kim';
  console.log(user.fullName); // fisrtName을 'Kim'으로 변경해도 fullName은 변경되지 않는다.
}

{
  class User {
    firstName: string;
    lastName: string;

    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    // get을 사용하여 fullName을 호출 할 때의 firstName과 lastName 반영시켜 리턴하게 한다.
    // get, set을 호출할땐 ()를 생략하여 작성해야한다.

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

  const user = new User('Steve', 'jobs');
  console.log(user.fullName);
  user.firstName = 'Kim';
  console.log(user.fullName); // 'Kim jobs'
}

{
  class User {
    private internalAge = 4;

    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    get age(): number {
      return 3;
    }

    // set 을사용하여 private한 internalAge의 값을 수정할 수 있다.
    set age(num: number) {
      if (num < 0) {
      }
      this.internalAge = num;
    }

    // 멤버변수를 따로 선언하지 않고 construtor 파라미터에서 public, private등을 선언하면 멤버 변수로 바로 사용가능하다.
    constructor(public firstName: string, private lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

  const user = new User('Steve', 'jobs');
  console.log(user.age); //3
  console.log((user.age = 20)); //20
}
