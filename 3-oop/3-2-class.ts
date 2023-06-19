{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAM_PER_SHOT: number = 7; // 필요없는 값이 instance에 할당되면 메모리 낭비이기 때문에 static을 사용하여 class level로 설정할 수 있다. class level 이기에 this를 사용하지 않고 className.Varialbe 로 사용한다.
    coffeeBeans: number = 0; // instance level

    constructor(Beans: number) {
      this.coffeeBeans = Beans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans');
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;

      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  const maker2 = new CoffeeMaker(7).makeCoffee(1);
  const maker3 = CoffeeMaker.makeMachine(10).makeCoffee(1); // makeMachince 함수를 class level로 선언하여 new 키워드를 사용하지 않고 바로 접근하여 사용가능하다.
  console.log(maker.makeCoffee(2));
  console.log(maker2);
  console.log(maker3);
}
