interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay(): void {
    console.log('fullTime');
  }

  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay(): void {
    console.log(`partTime`);
  }

  workPartTime() {}
}

// 세부적인 타입을 인자로 받아 추상적인 타입으로 다시 리턴하는 함수는 안좋다.
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const suhwan = new FullTimeEmployee();
const bob = new PartTimeEmployee();

//pay 함수에 넣어 실행하면 어떤 클래스로 생성된 인스턴스 인지 잃어버린다. pay 함수에서 emloyee로 리턴을 했기때문에
const suhwanAfterPay = pay(suhwan);
const bobAfterPay = pay(bob);

suhwanAfterPay.pay;
bobAfterPay.pay;

const obj = {
  name: 'suhwan',
  age: 20,
};

const obj2 = {
  animal: 'dog',
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, 'name'));
console.log(getValue(obj2, 'animal'));
