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

  interface ICommercialCoffeeMaker extends ICoffeeMaker {
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  interface IMilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface ISugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  // 깊은 상속 관계를 갖고있으면 하나의 값이 변경되면 연관되어 있는 클래스들을 전부 수정해야하는 불상사가 일어날 수 있다. composition은 메서드를 class로 나누고 interface를 사용하여 class끼리 연결시켜 값이 변경되어도 모든 클래스에 적용될 수 있게 한다.

  class CoffeeMaker implements ICoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(
      Beans: number,
      private milk: IMilkFrother,
      private sugar: ISugarProvider
    ) {
      this.coffeeBeans = Beans;
    }

    // static makeMachine(coffeeBeans: number): CoffeeMaker {
    //   return new CoffeeMaker(coffeeBeans);
    // }

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
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  //우유 거품기
  class CheapMilkSteamer implements IMilkFrother {
    private steamMilk(): void {
      console.log('Steaming some milk');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  class FancyMilkSteamer implements IMilkFrother {
    private steamMilk(): void {
      console.log('Fancy Steaming some milk');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  class ColdMilkSteamer implements IMilkFrother {
    private steamMilk(): void {
      console.log('Cold Steaming some milk');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  class NoMilk implements IMilkFrother {
    makeMilk(cup: CoffeeCup) {
      return cup;
    }
  }

  // 설탕 제조기
  class CandySugarMixer implements ISugarProvider {
    private getSugar() {
      console.log('Getting some sugar form candy');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return { ...cup, hasSugar: sugar };
    }
  }
  class SugarMixer implements ISugarProvider {
    private getSugar() {
      console.log('Getting some sugar form jar');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return { ...cup, hasSugar: sugar };
    }
  }
  class NoSugar implements ISugarProvider {
    addSugar(cup: CoffeeCup) {
      return cup;
    }
  }

  // Milk
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  // Sugar
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  // Coffee
  const sweetCandyMachine = new CoffeeMaker(32, noMilk, candySugar);
  const sweetMachine = new CoffeeMaker(32, noMilk, sugar);

  const latteMachine = new CoffeeMaker(12, cheapMilkMaker, noSugar);
  const coldLatteMachine = new CoffeeMaker(12, coldMilkMaker, noSugar);
  const sweetLatteMachine = new CoffeeMaker(32, cheapMilkMaker, candySugar);
}
