//interface는 어떤것을 구현할 목적으로 사용하고 type은 어떠한 데이터를 담을목적으로 사용

type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// object
const obj1: PositionType = {
  x: 1,
  y: 1,
};

const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1,
};

// class
class Pos1 implements PositionType {
  x: number;
  y: number;
}

class Pos2 implements PositionType {
  x: number;
  y: number;
}

// extends
interface ZPositionInterface extends PositionInterface {
  z: number;
}
type ZPositionType = PositionType & { z: number };

// only interfaces can be merged.
//같은 이름으로 선언한 interface는 합쳐진다.
interface PositionInterface {
  z: number;
}

// Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};
type Name = Person['name']; // string
type NumberType = number;
type Direction = 'left' | 'right';
