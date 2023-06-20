{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    coffeeBeans?: number;
    hasSugar?: boolean;
  };

  // public
  // private 외부에서 접근 불가
  // protected 외부에서 접근은 불가하지만 상속받은 클래스에선 접근 가능

  interface ICoffeeMaker {
    makeCoffee(shots: number, spoon?: number): CoffeeCup;
  }

  interface ICommercialCoffeeMaker extends ICoffeeMaker {
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMaker implements ICoffeeMaker, ICommercialCoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    // constructor를 상속하기위해 protected로 변경
    constructor(Beans: number) {
      this.coffeeBeans = Beans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
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

    private extract(shots: number): CoffeeCup {
      console.log(`pulling ${shots}`);
      return {
        shots,
        hasMilk: false,
        coffeeBeans: this.coffeeBeans,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMaker extends CoffeeMaker {
    constructor(beans: number, public readonly serialNumber: string) {
      // 부모 class의 constructor내에 있는 값을 가져오기 위해선 super()를 사용하여 가져와야한다.
      super(beans);
    }

    private steamMilk(): void {
      console.log('Steaming some milk..🥛');
    }

    makeCoffee(shots: number): CoffeeCup {
      // 상속받은걸 사용하기 위해선 super가 필요하다.
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMaker {
    private addSugar(): void {
      console.log('adding sugar..');
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.addSugar();
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  const machines: ICoffeeMaker[] = [
    new CoffeeMaker(16),
    new CaffeLatteMaker(16, 'SSS'),
    new SweetCoffeeMaker(16),
    new CoffeeMaker(16),
    new CaffeLatteMaker(16, 'SSS'),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach((machine) => {
    console.log('-------------------------');
    machine.makeCoffee(1);
  });
}
