{
  // Index Type

  const obj = {
    name: 'kim',
  };

  obj.name;
  obj['name'];

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'femail';
  };

  type Name = Animal['name']; // string
  const text: Name = 'hello';

  type Gender = Animal['gender']; // 'male' | 'femail';

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key: Keys = 'age';

  type Person = {
    name: string;
    gender: Animal['gender'];
  };

  const person: Person = {
    name: 'kim',
    gender: 'male',
  };
}
