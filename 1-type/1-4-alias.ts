{
  type Text = string;
  const name: Text = 'suhwan';
  type Num = number;
  type Students = {
    name: string;
    age: number;
  };

  const students: Students = {
    name: 'suhwan',
    age: 24,
  };

  // String Literal Types

  type Name = 'name';
  let suhwanName: Name;
  suhwanName = 'name';
}
