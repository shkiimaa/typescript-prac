{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    coffeeBeans?: number;
    hasSugar?: boolean;
  };

  interface ICoffeeMaker {
    makeCoffee(shots: number, spoon?: number): CoffeeCup;
  }

  //abstract 을 사용하면 instance를 만들 수 없다. abstract 클래스는 인스턴스를 만드는것을 목적으로 하는것이 아니다.
  //공통적인 부분을 구현하는 목적으로 만든다. 인스턴스별로 달라져야하는 부분이 있다면 해당 메서드에 abstract를 사용한다.
  abstract class CoffeeMaker implements ICoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(Beans: number) {
      this.coffeeBeans = Beans;
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater 0');
      }
      this.coffeeBeans += beans;
    }

    clean(): void {
      console.log('cleaning the machine');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans');
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up');
    }

    protected abstract extract(shots: number): CoffeeCup;

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMaker extends CoffeeMaker {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }

    private steamMilk(): void {
      console.log('Steaming some milk..🥛');
    }

    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMaker {
    private addSugar(): void {
      console.log('adding sugar..');
    }

    protected extract(shots: number): CoffeeCup {
      this.addSugar();
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const machines: ICoffeeMaker[] = [
    new CaffeLatteMaker(16, 'SSS'),
    new SweetCoffeeMaker(16),
    new CaffeLatteMaker(16, 'SSS'),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach((machine) => {
    console.log('-------------------------');
    machine.makeCoffee(1);
  });
}
