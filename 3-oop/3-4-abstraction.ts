{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
    coffeeBeans: number;
  };

  // public
  // private 외부에서 접근 불가
  // protected 외부에서 접근은 불가하지만 상속받은 클래스에선 접근 가능

  interface ICoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface ICommercialCoffeeMaker extends ICoffeeMaker {
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  //interface 를 implements한 클래스는 interface에 있는 내용을 모두 구현해야한다.
  class CoffeeMaker implements ICoffeeMaker, ICommercialCoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;
    private constructor(Beans: number) {
      this.coffeeBeans = Beans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    } // static으로 생성자 함수를 만들어 사용을 하면 constructor를 private 을 주어 생성자 함수로만 사용하게 한다.

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater 0');
      }
      this.coffeeBeans += beans;
    }

    clean(): void {
      console.log('cleaning the machine');
    }

    //커피콩을 갈고 데우고 추출하는 과정은 내부에서 일어나는 일이므로 외부에서 사용가능하면 클래스 사용자가 어떤거 부터 해야하는지 고민해야한다. private를 사용하여 클래스 사용자가 헷갈리지 않게 추상화한다.
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

  const maker: CoffeeMaker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(30);

  const maker2: ICoffeeMaker = CoffeeMaker.makeMachine(32);
  maker2.fillCoffeeBeans(30); // interface를 사용한 추상화. ICoffeMaker에는 fillCoffeeBeans가 없기에 fillCoffeeBeans에 접근이 불가능하다. 즉 interface에서 정의된 값들만 사용이 가능하다.

  const maker3: ICommercialCoffeeMaker = CoffeeMaker.makeMachine(32);
  maker3.fillCoffeeBeans(30);
  maker3.makeCoffee(2);
  maker3.clean();

  class AmateurUser {
    constructor(private machine: ICoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
    }
  }

  class ProBarista {
    test;
    constructor(private machine: ICommercialCoffeeMaker) {
      this.test = machine;
    }

    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  const maker4 = CoffeeMaker.makeMachine(32);
  const amateur = new AmateurUser(maker4);
  const pro = new ProBarista(maker4);
}
