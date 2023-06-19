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
