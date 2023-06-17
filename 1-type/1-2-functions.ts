{
  // function jsadd(num1, num2) {
  //   return num1 + num2;
  // }

  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // function jsFetchNum(id) {
  //   // code ...
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // function fetchNum(id: string): Promise<number> {
  //   // code ...
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // Optional parameter
  function printName(fisrtName: string, lastName?: string) {
    console.log(fisrtName);
    console.log(lastName);
  }

  printName('steve', 'job');
  printName('suhwan');

  //Default parameter
  function printMessage(message: string = 'defalut Message') {
    console.log(message);
  }
  printMessage();

  //Rest paramerter
  function addNumbers(...number: number[]): number {
    return number.reduce((acc, cur) => acc + cur);
  }
  console.log(addNumbers(1, 2, 3, 4, 5));
}
